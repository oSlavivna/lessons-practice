// alert('bla bla bla')
const user = {
  id: 10,
  age: 20,
  name: "Vitaly",
};

const id = Symbol("some new id"); //не перезапише омновний id 
user[id] = 500;
console.log(user);
//  {id: 10, age: 20, name: 'Vitaly', Symbol(some new id): 500}