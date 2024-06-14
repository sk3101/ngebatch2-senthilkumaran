// Rewrite this function in Arrow form:

function sayHello(firstName: string, lastName: string) {
  console.log(`sayHello: Hello ${firstName} ${lastName}`)
}

// TODO make hiEveryone() as arrow function with sayHello functionality


const hiEveryone = () => {sayHello ('Neil','Cummins')}

hiEveryone()



// Rewrite this function in one-line arrow syntax:

function loadsOfMoney(myWages: number) {
  return myWages * 10
}

//   // TODO make soMuchMoreMoney() as a one-line arrow expression with loadsOfMoney

const soMuchMoreMoney = (inputnum: number) => {
  return inputnum * 10
} 

const resultSum = soMuchMoreMoney(300)
console.log(`resultSum: ${resultSum}`)
