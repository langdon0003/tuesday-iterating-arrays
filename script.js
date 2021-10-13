const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];

// Iterator using the for loop to grab/sequester/fetch/retrieve individual elements in the programmers array:
// Print to the screen the first name of each programmer.

// programmers.forEach(x => {
//   let result = x.split(" ")
//   let length = result.length
//   console.log('result :>> ', ...result[length-1][0]);
// })

// const compareAge = (x, y) => {
//   let a = x.split(" ")
//   let b = y.split(" ")

//   // let aLastName = a[a.length-1]

//   // let firstChar = [...aLastName][0]

//   let aFirstChar = [...a[a.length - 1]][0]
//   let bFirstChar = [...b[b.length - 1]][0]

//   console.log('aFirstChar :>> ', aFirstChar);
//   console.log('bFirstChar :>> ', bFirstChar);

//   if (aFirstChar > bFirstChar) return 1;
//   if (aFirstChar < bFirstChar) return -1;
// }

// programmers.sort(compareAge)

// console.log('A programmers :>> ', programmers);

// var result = 0

// programmers.forEach(x => {
//   result += x.length
// })

// console.log('result :>> ', result);

// 6. Exercise Array of Object: Monthly Balance
const user = {
  currentBalance: 5000,
  transactionsMonthToDate: [{}],
};

user.transactionsMonthToDate = [
  {
    amount: 3000,
    type: "deposit",
    category: "Salary - Full Time",
  },
  { category: "Dining", amount: 50, type: "withdrawal" },
  { category: "Dining", amount: 100, type: "withdrawal" },
  { category: "Rent", amount: 2000, type: "withdrawal" },
  { category: "Groceries", amount: 250, type: "withdrawal" },
  {
    amount: 250,
    type: "withdrawal",
    category: "Transportation",
  },
  {
    amount: 250,
    type: "withdrawal",
    category: "Health",
  },
  {
    amount: 50,
    type: "withdrawal",
    category: "Travel - Fuel",
  },
  { category: "Living", amount: 650, type: "withdrawal" },
  { category: "Groceries", amount: 500, type: "withdrawal" },
  { category: "Living", amount: 250, type: "withdrawal" },
  { category: "Living", amount: 250, type: "withdrawal" },
  {
    amount: 5000,
    type: "deposit",
    category: "Salary - Part Time",
  },
  { category: "Groceries", amount: 450, type: "withdrawal" },
  {
    amount: 58,
    type: "withdrawal",
    category: "Transportation",
  },
  {
    amount: 50,
    type: "withdrawal",
    category: "Health",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Transportation",
  },
  {
    amount: 150,
    type: "withdrawal",
    category: "Transportation",
  },
  { category: "Groceries", amount: 100, type: "withdrawal" },
  {
    amount: 100,
    type: "withdrawal",
    category: "Entertainment",
  },
  {
    amount: 500,
    type: "withdrawal",
    category: "Entertainment",
  },
  { category: "Groceries", amount: 300, type: "withdrawal" },
  {
    amount: 500,
    type: "withdrawal",
    category: "Travel - Airline",
  },
  {
    amount: 1500,
    type: "withdrawal",
    category: "Travel - Hotel",
  },
  {
    amount: 50,
    type: "withdrawal",
    category: "Travel - Fuel",
  },
  { category: "Groceries", amount: 200, type: "withdrawal" },
  {
    amount: 500,
    type: "deposit",
    category: "Portfolio Dividends",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Entertainment",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Travel - Fuel",
  },
  { category: "Groceries", amount: 200, type: "withdrawal" },
  {
    amount: 100,
    type: "withdrawal",
    category: "Entertainment",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Health",
  },
];

const printTnxHistory = (user) => {

  console.log('Balance: $', user.currentBalance);
  console.log("Transaction History:");

  for (let i = 0; i < user.transactionsMonthToDate.length; i++) {
    const tnx = user.transactionsMonthToDate[i];

    if (tnx.type === 'withdrawal') {
      user.currentBalance -= tnx.amount
      console.log(`- You withdrew $${tnx.amount}. The new balance is $${user.currentBalance} `);
    } else {
      user.currentBalance += tnx.amount
      console.log(`- You deposited $${tnx.amount}. The new balance is $${user.currentBalance} `);
    }

  }

}

printTnxHistory(user)

const returnTotalDeposit = (user) => {
  const depList = user.transactionsMonthToDate.filter(x => x.type === 'deposit')

  const result = depList.reduce((total, curTnx) => total += curTnx.amount, 0)

  return `Total number of deposit is ${depList.length} tnx and sum is $${result}`
}

console.log(returnTotalDeposit(user));

const returnTotalWithdrawal = (user) => {
  const withdrawList = user.transactionsMonthToDate.filter(x => x.type === 'withdrawal')

  const result = withdrawList.reduce((total, curTnx) => total += curTnx.amount, 0)

  return `Total number of withdrew is ${withdrawList.length} tnx and sum is $${result}`
}

console.log(returnTotalWithdrawal(user));

const diffBwDepAndWith = (user) => {
  const diff = user.transactionsMonthToDate.reduce(

    (total, currTnx) => {

      currTnx.type === 'deposit' ? total += currTnx.amount : total -= currTnx.amount
      return total
    }
    , 0)

  return `The difference b/w deposits and withdrawals is $${Math.abs(diff)} and the new balance for the next month is $${user.currentBalance + diff}`
}

console.log(diffBwDepAndWith(user));

const sumOfType = (user) => {
  const tnx = user.transactionsMonthToDate

  const sumGroceries = tnx.reduce((total, currTnx) => {
    currTnx.category === 'Groceries' ? total += currTnx.amount : total
    return total
  }, 0)
  const sumEntertainment = tnx.reduce((total, currTnx) => {
    currTnx.category === 'Entertainment' ? total += currTnx.amount : total
    return total
  }, 0)
  const sumTravel = tnx.reduce((total, currTnx) => {
    currTnx.category.slice(0, 6) === 'Travel' ? total += currTnx.amount : total
    return total
  }, 0)

  return `The sum of the groceries is $${sumGroceries}. The sum of the entertainment is $${sumEntertainment}. The sum of the travel is $${sumTravel}`
}

console.log(sumOfType(user));

const usdToVND = 23000;

function tnxInVND(user) {
  const tnx = user.transactionsMonthToDate

  tnx.map(tnx => tnx.amount = tnx.amount * usdToVND)

  let balanceVND = user.currentBalance * usdToVND

  console.log('Balance: $', balanceVND.toLocaleString('vn-VN'));
  console.log("Transaction History:");

  for (let i = 0; i < tnx.length; i++) {
    const el = tnx[i];

    if (el.type === 'withdrawal') {
      balanceVND -= el.amount
      console.log(`- You withdrew đ ${el.amount.toLocaleString('vn-VN')}. The new balance is $${balanceVND.toLocaleString('vn-VN')} `);
    } else {
      balanceVND += el.amount
      console.log(`- You deposited $${el.amount.toLocaleString('vn-VN')}. The new balance is $${balanceVND.toLocaleString('vn-VN')} `);
    }

  }



  return tnx
}

tnxInVND(user)

