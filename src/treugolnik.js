function calculateTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
  }
  const sideA = 5;
  const sideB = 4;
  const sideC = 3;
  const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log("Площадь треугольника: " + triangleArea.toFixed(2) + " кв. ед.");