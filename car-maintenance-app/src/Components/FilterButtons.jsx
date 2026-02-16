import { maintenanceTypes } from '../Interfaces/maintenance.interface';

function FilterButtons({ filter, setFilter, maintenances }) {
  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
          filter === 'all' 
            ? 'bg-slate-700 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Tümü ({maintenances.length})
      </button>
      {maintenanceTypes.slice(0, 6).map((type, idx) => {
        const count = maintenances.filter(m => m.type === type).length;
        if (count === 0) return null;
        return (
          <button
            key={idx}
            onClick={() => setFilter(type)}
            className={`px-3 py-2 rounded-lg font-semibold transition text-sm ${
              filter === type 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {type} ({count})
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
