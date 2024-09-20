const iniRadius = 5;

const PI = 3.1415;
const area = PI * radius * radius;
const minSpace = 0.8;
const startingCapacity = 20 * minSpace;


const plantGrowth = (weeks) => {
  let condition = '';
  const plantCount = (startingCapacity * 2) * weeks;
  if (plantCount > startingCapacity * 0.8) {
    condition = "The plant count has reached or gone beyond 80% of the area's capacity , so the plants need to be pruned.";
  } else if (plantCount > startingCapacity * 0.5) {
    condition = 'The plants are growing at an acceptable rate and just need to be monitored';
  } else {
    condition = 'The plants are less than 50% of the area capacity, so more need to be planted to reach at least 50% capacity.';
  }
  return condition;
}

/*
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?
*/

const expandedArea = (startingCapacity * 2) * 100;
const expandedRadius = Math.sqrt(expandedArea / PI);

console.log(`The expanded garden would require an additional ${expandedArea - area} square meters of space.`);
console.log(`The radius of the expanded garden would be ${expandedRadius} meters.`);