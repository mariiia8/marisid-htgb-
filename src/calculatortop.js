function calculateTripCost(fuelConsumption, distance, fuelPrice) {
    const fuelNeeded = (fuelConsumption / 100) * distance;
    const tripCost = fuelNeeded * fuelPrice;
    return tripCost;
  }
  
  // Пример использования:
  const fuelConsumption = 8; // Расход топлива на 100 км
  const distance = 200; // Планируемая дистанция поездки
  const fuelPrice = 1.5; // Цена топлива за литр
  
  const tripCost = calculateTripCost(fuelConsumption, distance, fuelPrice);
  console.log("Стоимость поездки: " + tripCost.toFixed(2) + " руб.");