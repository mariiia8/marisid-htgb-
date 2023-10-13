function calculateTriangleArea(a, b, c) {
    // Полупериметр треугольника
    const p = (a + b + c) / 2;
    
    // Формула Герона для вычисления площади треугольника
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
    return area;
  }
  
  // Пример использования:
  const sideA = 5; // Длина стороны A
  const sideB = 4; // Длина стороны B
  const sideC = 3; // Длина стороны C
  
  const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log("Площадь треугольника: " + triangleArea.toFixed(2) + " кв. ед.");