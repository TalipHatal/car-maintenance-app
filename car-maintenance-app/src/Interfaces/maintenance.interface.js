// Bakım verisi için interface/type tanımı
export const MaintenanceInterface = {
  id: 0,
  type: '',
  date: '',
  km: '',
  cost: '',
  description: '',
  createdAt: ''
};

// Bakım türleri
export const maintenanceTypes = [
  '🔧 Yağ Değişimi',
  '🔩 Fren Bakımı',
  '⚙️ Motor Bakımı',
  '🚙 Lastik Değişimi',
  '🔋 Akü Değişimi',
  '❄️ Klima Bakımı',
  '🧪 Antifiriz',
  '🔍 Genel Kontrol',
  '📋 Diğer'
];