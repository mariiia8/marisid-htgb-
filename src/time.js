const totalSeconds = 3665;
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(`Время: ${hours} Ч ${minutes} мин ${seconds} сек`);