/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/
export type Developer = {
  firstName: string, 
  lastName: string, 
  country: string, 
  continent: string, 
  age: number, 
  language: string
}

const developers = [
  { 
    firstName: 'Sofia', 
    lastName: 'I.', 
    country: 'Argentina', 
    continent: 'Americas', 
    age: 34, 
    language: 'Javascript'
  },
  { 
    firstName: 'Aisha', 
    lastName: 'X.', 
    country: 'Croatia', 
    continent: 'Europe', 
    age: 35, 
    language: 'Python'
  },
  { 
    firstName: 'Madison', 
    lastName: 'U.', 
    country: 'United States', 
    continent: 'Americas', 
    age: 23, 
    language: 'Python'
  }
]


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.

export function countFromEurope (developers: Developer[]) {
  const onlyEuro = developers.filter((developers) => developers.continent=='Europe');
  console.log(onlyEuro.length)
}

countFromEurope(developers)

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']

// const shoutOuts = developers.map((items)=>`Hi ${items.firstName}, what do you like the most about ${items.language} ?` );
// console.log(shoutOuts);

export function getGreetings (developers: Developer[]) {  
  const shoutOuts = developers.map((items)=>`Hi ${items.firstName}, what do you like the most about ${items.language} ?` );
  console.log(shoutOuts);
}
getGreetings(developers)

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: Developer[]) {
   const onlyJava = developers.filter((developers) => developers.language=='Javascript');
   console.log(onlyJava.length != 0)
}
isJSComing(developers)

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'

export function getFirstPythonDeveloper (developers: Developer[]) {
  const firstPy = developers.filter((developers) => developers.language=='Python');
  const nameCon = firstPy.map((items)=>`${items.firstName},${items.country}`)
  console.log(nameCon[0])
}
getFirstPythonDeveloper(developers);

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.

export function getAverageAge(developers: Developer[]) {  
  if (developers.length == 0){
    return -1;
    }
  else
  {
  console.log(Math.floor((developers.reduce((age,value)=>age+value.age,0))/developers.length));
  }
}

getAverageAge(developers)

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts (developers: Developer[]) {
  let lang:{[key:string]:number} = {}
  developers.map(items => {
      const lan = items.language
      if (lang[lan]){
        lang[lan]++     
       }
      else{
        lang[lan] = 1
      } 
  })
  console.log(lang)
}
getLanguageCounts(developers)

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest (developers: Developer[]) {
  const devag = developers.sort((a,b)=> b.age - a.age);
  let oldDev:string[] = []
  const oldestDev = devag[0].age
  developers.map(items => {
      if (items.age == oldestDev)
      {
        oldDev = [...oldDev,items.firstName]
      }  
  })
  console.log(oldDev)
}

getOldest(developers);

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup (developers: Developer[]) {
let conti = [{"Continent":"Africa","Count":1},{"Continent":"Americas","Count":1},{"Continent":"Asia","Count":1},{"Continent":"Europe","Count":1},{"Continent":"Oceania","Count":1}]
let continentArray=developers.map(items=>items.continent)//to get the continent only from the list and not the count
conti.forEach(cnt=>{
  for(let i=0;i<continentArray.length;i++)//iterating through the developer array in a for loop fashin to access theindex values
  {
    if(cnt.Continent==continentArray[i])
    {
      cnt.Count=0;
    }
  }
})
if(conti.reduce((a,b)=>a+b.Count,0)==0)
console.log(true);
else
console.log(false);

}
isGlobalGroup(developers);