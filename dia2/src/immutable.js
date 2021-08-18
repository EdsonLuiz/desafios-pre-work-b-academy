const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = JSON.parse(JSON.stringify(john))


jane.name = 'Jane'
jane.hobbies.push('MuayThai', 'Programming')

console.log('John:', john)
console.log('Jane:', jane)
console.log(`Objects are the same? ` + Object.is(jane, john))
