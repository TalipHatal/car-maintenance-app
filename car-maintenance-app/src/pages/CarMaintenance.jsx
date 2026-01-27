import { useState, useEffect } from 'react';
import StatsCards from '../components/StatsCards';
import MaintenanceForm from '../components/MaintenanceForm';
import FilterButtons from '../components/FilterButtons';
import MaintenanceList from '../components/MaintenanceList';

function CarMaintenance() {
  const [maintenances, setMaintenances] = useState(() => {
    const saved = localStorage.getItem('maintenances');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [inputValues, setInputValues] = useState({
    type: '',
    date: '',
    km: '',
    cost: '',
    description: ''
  });
  
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('maintenances', JSON.stringify(maintenances));
  }, [maintenances]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValues.type || !inputValues.date || !inputValues.km || !inputValues.cost) {
      alert('Lütfen tüm zorunlu alanları doldurun!');
      return;
    }

    if (editId) {
      setMaintenances(maintenances.map(m => 
        m.id === editId ? { ...m, ...inputValues } : m
      ));
      setEditId(null);
    } else {
      const newMaintenance = {
        id: Date.now(),
        ...inputValues,
        createdAt: new Date().toISOString()
      };
      setMaintenances([...maintenances, newMaintenance]);
    }
    
    setInputValues({ type: '', date: '', km: '', cost: '', description: '' });
  };

  const deleteMaintenance = (id) => {
    if (window.confirm('Bu bakım kaydını silmek istediğinizden emin misiniz?')) {
      setMaintenances(maintenances.filter(m => m.id !== id));
    }
  };

  const startEdit = (maintenance) => {
    setEditId(maintenance.id);
    setInputValues({
      type: maintenance.type,
      date: maintenance.date,
      km: maintenance.km,
      cost: maintenance.cost,
      description: maintenance.description || ''
    });
  };

  const cancelEdit = () => {
    setEditId(null);
    setInputValues({ type: '', date: '', km: '', cost: '', description: '' });
  };

  const filteredMaintenances = maintenances.filter(m => {
    if (filter === 'all') return true;
    return m.type === filter;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const stats = {
    total: maintenances.length,
    totalCost: maintenances.reduce((sum, m) => sum + parseFloat(m.cost), 0),
    lastKm: maintenances.length > 0 ? Math.max(...maintenances.map(m => parseInt(m.km))) : 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2 drop-shadow-lg">
            🚗 Araç Bakım Takip
          </h1>
          <p className="text-white text-lg opacity-90">
            Aracınızın tüm bakım işlemlerini takip edin
          </p>
        </div>

        {/* Stats Cards Component */}
        <StatsCards stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Component */}
          <div className="lg:col-span-1">
            <MaintenanceForm
              inputValues={inputValues}
              setInputValues={setInputValues}
              editId={editId}
              handleSubmit={handleSubmit}
              cancelEdit={cancelEdit}
            />
          </div>

          {/* List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">📋 Bakım Geçmişi</h2>

              {/* Filter Component */}
              <FilterButtons
                filter={filter}
                setFilter={setFilter}
                maintenances={maintenances}
              />

              {/* Maintenance List Component */}
              <MaintenanceList
                filteredMaintenances={filteredMaintenances}
                startEdit={startEdit}
                deleteMaintenance={deleteMaintenance}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white text-sm opacity-80 mt-8">
          <p>Made with using React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default CarMaintenance;