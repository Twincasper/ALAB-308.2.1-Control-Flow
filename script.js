const radius = 5;

const PI = 3.1415;
const area = PI * radius * radius;
const minSpace = 0.8;
const startingArea = 20 * minSpace;


const plantGrowth = (weeks) => {
  let condition = '';
  const plantArea = (startingArea * 2) * weeks;
  console.log("THis is the plant area",plantArea)
  if (plantArea > area * 0.8) {
    condition = "The plant count has reached or gone beyond 80% of the area's capacity , so the plants need to be pruned.";
  } else if (plantArea > area * 0.5) {
    condition = 'The plants are growing at an acceptable rate and just need to be monitored';
  } else {
    condition = 'The plants are less than 50% of the area capacity, so more need to be planted to reach at least 50% capacity.';
  }
  return condition;
}

console.log(plantGrowth(1));
console.log( plantGrowth(2));
console.log(plantGrowth(3));

// Part 2

const expandedArea = (startingArea * 2) * 100;
const expandedRadius = Math.sqrt(expandedArea / PI);

console.log(`The expanded garden would require an additional ${expandedArea - area} square meters of space.`);
console.log(`The radius of the expanded garden would be ${expandedRadius} meters.`);

// Part 3

try {
  if (area > expandedArea) {
    throw new Error(`The expanded garden would require more space than the original garden.`);
  }
} catch (error) {
  console.error(error.message);
}