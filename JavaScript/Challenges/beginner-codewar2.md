# 10 Beginner / Intermediate JavaScript Practice Problems

My CodeWars portfolio can be found [here](https://www.codewars.com/users/Jennifer-464)

I took inspiration from [Zachgoll](https://www.codewars.com/users/zachgoll/authored_collections) and completed "Lesson 6 Practice Challenges #fullstackroadmap"

From List Filtering to Is the date today

Covered:
- split(), slice() & join()
- repeat()
- forEach()
- map()
- Math.floor() & Math.ceil()
- Number()

- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

<!-- 
Pete, the baker

function cakes(recipe, available) {  
  if (Object.keys(recipe) > Object.keys(available))
    return 0;

  var possibleCakes = [];

  for(const recipeItem in recipe) {
    const recipeAmount = recipe[recipeItem];
    
    const haveAvailable = available.hasOwnProperty(recipeItem);
    if(!haveAvailable)
      return 0;
    
    const availableAmount = available.recipeItem;
    
    possibleCakes.push(Math.floor(availableAmount / recipeAmount))
  }
  
  return Math.min(possibleCakes);
}
 -->