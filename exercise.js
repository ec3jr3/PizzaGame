function numberOfPizzas(persons, slicesPerPizza)
{
  var num_pizza = 0;

  if(!Array.isArray(persons)) return[];
  //if(!Array.isArray(persons.slices=null)) return[];
    for(var i = 0; i<persons.length; i++)
    {
      if (persons[i].slices)
       {
         if(isNaN(persons[i].slices)) persons[i].slices =  0;
          num_pizza += persons[i].slices;
       }
    }
    var total = num_pizza/slicesPerPizza;
    return Math.ceil(total);
}

(function () {
  const persons = [
    {
      name: 'Jony',
      slices: 6
    },
    {
      name: 'Adrianita',
      slices: 4
    },
    {
      name: 'Ulises',
      slices: 3
    },
    {
      name: 'Andres',
      slices: 5
    }
  ];
  const res = numberOfPizzas(persons, 8);
  console.log(res);
})()

module.exports = numberOfPizzas;
