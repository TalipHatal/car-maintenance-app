function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center shadow-lg">
        <div className="text-4xl font-bold">{stats.total}</div>
        <div className="text-sm opacity-90 mt-1">Toplam Bakım</div>
      </div>
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white text-center shadow-lg">
        <div className="text-4xl font-bold">{stats.totalCost.toFixed(2)} ₺</div>
        <div className="text-sm opacity-90 mt-1">Toplam Maliyet</div>
      </div>
      <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-6 text-white text-center shadow-lg">
        <div className="text-4xl font-bold">{stats.lastKm.toLocaleString()}</div>
        <div className="text-sm opacity-90 mt-1">Son KM</div>
      </div>
    </div>
  );
}

export default StatsCards;