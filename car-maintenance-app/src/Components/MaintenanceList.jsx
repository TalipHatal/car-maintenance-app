function MaintenanceList({ 
  filteredMaintenances, 
  startEdit, 
  deleteMaintenance 
}) {
  if (filteredMaintenances.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔧</div>
        <p className="text-gray-500 text-lg">
          Henüz bakım kaydı yok. İlk bakımı ekleyin!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
      {filteredMaintenances.map(maintenance => (
        <div
          key={maintenance.id}
          className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="text-xl font-bold text-gray-800 mb-1">
                {maintenance.type}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>📅 {new Date(maintenance.date).toLocaleDateString('tr-TR')}</div>
                <div>🛣️ {parseInt(maintenance.km).toLocaleString()} km</div>
                <div className="col-span-2">
                  💰 <span className="font-bold text-emerald-600">
                    {parseFloat(maintenance.cost).toFixed(2)} ₺
                  </span>
                </div>
              </div>
              {maintenance.description && (
                <div className="mt-2 text-sm text-gray-500 italic">
                  📝 {maintenance.description}
                </div>
              )}
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => startEdit(maintenance)}
                className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition font-semibold text-sm"
              >
                ✏️
              </button>
              <button
                onClick={() => deleteMaintenance(maintenance.id)}
                className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition font-semibold text-sm"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MaintenanceList;