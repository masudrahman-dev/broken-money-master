const calculateExpense = () => {
  const income = Number(document.querySelector('#income').value);
  // console.log(income);
  const food = Number(document.querySelector('#food').value);
  // console.log(food);
  const rent = Number(document.querySelector('#rent').value);
  // console.log(rent);
  const clothes = Number(document.querySelectorAll('#clothes')[0].value);
  // console.log(clothes);
  // const num = Number('');
  // console.log('num :>> ', num);
  if (
    income === 0 ||
    income < 0 ||
    isNaN(income) ||
    food < 0 ||
    isNaN(food) ||
    rent < 0 ||
    isNaN(rent) ||
    clothes < 0 ||
    isNaN(clothes)
  ) {
    alert('Inputs must be positive numbers');
    return;
  }
  // calculate expense
  // const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);
  const expense = food + rent + clothes;

  // calculate balance
  // const balance = parseInt(income) - expense;
  const balance = income - expense;
  //   validate income
  if (expense > income) {
    alert('Expenses cannot be more than income');
  } else {
    // view total expense and balance
    document.getElementById('total-expense').innerText = expense;
    document.getElementById('balance').innerText = balance;
  }
  // console.log((getIncome = ''));
  // getIncome = '';
  document.querySelector('#income').value = '';
  document.querySelector('#food').value = '';
  document.querySelector('#rent').value = '';
  document.querySelector('#clothes').value = '';
};

// calculate saving
const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = Number(document.getElementById('save').value);
  console.log('savePercentage :>> ', savePercentage);
  //   Validate saving percentage value
  if (savePercentage < 0 || isNaN(savePercentage)) {
    alert('Provide positive saving value');
  }
  const totalBalance = Number(document.getElementById('balance').innerText);
  console.log('totalBalance :>> ', totalBalance);
  // calculate saving amount
  const savingAmount = (totalBalance * savePercentage) / 100;
  console.log('savingAmount :>> ', savingAmount);
  // calculate remaining balance
  // const balance = document.getElementById('balance').innerText;
  const remainingBalance = totalBalance - savingAmount;
  console.log('remainingBalance :>> ', remainingBalance);
  //   validate saving amount
  if (savingAmount > totalBalance) {
    alert('SavingAmount is greater than balance');
  } else {
    // view saving amount and remaining balance
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText =
      remainingBalance.toFixed(2);
  }
  document.getElementById('save').value = '';
};
