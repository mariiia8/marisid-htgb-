function calculateLoanPayment(principal, annualInterestRate, loanTerm) {
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const totalPayments = loanTerm * 12;
    
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - principal;
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  }
  
  // Пример использования:
  const loanPrincipal = 200000; // Сумма займа
  const annualInterestRate = 10; // Процентная ставка годовых
  const loanTerm = 2; // Срок займа в годах
  
  const loanDetails = calculateLoanPayment(loanPrincipal, annualInterestRate, loanTerm);
  console.log("Ежемесячный платеж: " + loanDetails.monthlyPayment + " руб.");
  console.log("Общая выплата по кредиту: " + loanDetails.totalPayment + " руб.");
  console.log("Переплата по кредиту: " + loanDetails.totalInterest + " руб.");