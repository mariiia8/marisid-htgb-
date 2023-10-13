const totalBill = 3500; //Общий счет
const tip = 500; //чаевые
const numberOfPeople = 4; //Кол-во людей
const billPerPerson = (totalBill + tip) / numberOfPeople;
console.log(`С каждого по ${billPerPerson} рублей`);
