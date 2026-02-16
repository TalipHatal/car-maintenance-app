import { maintenanceTypes } from '../Interfaces/maintenance.interface';

function MaintenanceForm({ 
  inputValues, 
  setInputValues, 
  editId, 
  handleSubmit, 
  cancelEdit 
}) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sticky top-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {editId ? '✏️ Bakım Güncelle' : '➕ Yeni Bakım Ekle'}
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bakım Türü *
          </label>
          <select
            value={inputValues.type}
            onChange={(e) => setInputValues({...inputValues, type: e.target.value})}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seçiniz</option>
            {maintenanceTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tarih *
          </label>
          <input
            type="date"
            value={inputValues.date}
            onChange={(e) => setInputValues({...inputValues, date: e.target.value})}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Kilometre *
          </label>
          <input
            type="number"
            value={inputValues.km}
            onChange={(e) => setInputValues({...inputValues, km: e.target.value})}
            placeholder="Örn: 45000"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Maliyet (₺) *
          </label>
          <input
            type="number"
            step="0.01"
            value={inputValues.cost}
            onChange={(e) => setInputValues({...inputValues, cost: e.target.value})}
            placeholder="Örn: 350.50"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Açıklama
          </label>
          <textarea
            value={inputValues.description}
            onChange={(e) => setInputValues({...inputValues, description: e.target.value})}
            placeholder="Ek bilgiler..."
            rows="3"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className={`flex-1 py-3 rounded-lg text-white font-bold transition transform hover:scale-105 ${
              editId 
                ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' 
                : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800'
            }`}
          >
            {editId ? '✓ Güncelle' : '+ Ekle'}
          </button>
          {editId && (
            <button
              onClick={cancelEdit}
              className="px-4 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold transition"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MaintenanceForm;
