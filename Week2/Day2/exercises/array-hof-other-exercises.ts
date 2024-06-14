// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO

const totAge = someAcademitesWithAges.reduce((total,numb)=>total+numb.age,0)
console.log("The total age in months", totAge)

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it

const sortByName = (array:Academite[]) => {
  return array.sort((a,b)=>{
    if(a.name>b.name)
    return 1
  else if (a.name<b.name)
  return -1
else 
return 0
  })
};
 
console.log ("the sorted name ", sortByName(someAcademitesWithAges));

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it

const sortByAges = someAcademitesWithAges.sort((a,b)=> b.age - a.age);

console.log ("the sorted age as oldest first is ",sortByAges);

// EOF
