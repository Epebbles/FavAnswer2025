const answerObj = [
  { answer: "bell pepper. It's fun to dip into sauces at parties", score: 564 },
  { answer: 'sweet potatoes - creamy and smooth and can use in any dish', score: 253 },
  { answer: 'kale - health benefits. IDK anything more healty the kalein my salad and soup', score: 865 },
  { answer: 'tomatoes - taste good on everything, from hamburgers to pasta sauce and soups too', score: 185 },
  { answer: 'I like avacado. There are great health benefits too.', score: 43 },
  { answer: 'potatoes. Virginia knows how to make these 100 different ways', score: 963 },
  { answer: "cabbage. I am on the soup diet and it's workign so I love it ", score: 475 },
  { answer: 'rhubarb in pie is my favorite but my grandma used to make it and i dont like her', score: 734 },
  { answer: "i tried bok choy the other day and i really liked it. Maybe it's becoming my favorite", score: 563 },
  { answer: 'string beans. Just easy steam and with a squeeze of lemon', score: 823 },
  { answer: 'brocilli. I like the taste and especillay with cheese on top', score: 73 },
  { answer: 'leeks have an amazing flavor and i use it in all my french cooking', score: 532 },
  { answer: 'mushrooms - a little fungus never hurt anyone, except my brother Joe who is allergic', score: 348 },
  { answer: 'jalapeño- spicy and can handle', score: 512 },
  { answer: 'I used to hate brussel sprouts but now they are ok and sometimes I will makme them', score: 841 },
  { answer: 'the crunch in cauliflower is great. I bake mine or roast it for extra flavor', score: 632 },
  { answer: 'crn on the cob in mid summer at a bbq is the best ever', score: 392 },
  { answer: 'broccolini is much better and less bitter the regular broccoli', score: 418 },
  { answer: "I like broccoli because I think it's very healthy.", score: 798 },
  { answer: 'peas - they roll around my plate and when I was a kid I used to like playing with them', score: 835 },
  { answer: "spinach is great even though my friends say they don't like it", score: 755 },
  { answer: 'squash because I like to grow them then eat them in the fall', score: 29 },
  { answer: 'I love carrots - even boiled but my favorite is when I roast them with other veggies', score: 359 },
  { answer: 'snow peas. I can grow them on a bush and put them in salads and veggie stir fry', score: 7 },
  { answer: 'garlic has the best flavor but I wonder if it is considered a vegetable', score: 689 },
  { answer: "Asparagus is so good but now I saw that they say it's not good for you", score: 390 },
  { answer: 'celery is the most under-rated vegetable and I love it - and used in stuffing', score: 521 },
  { answer: 'The most versatile veggie is zucchini. You can also make spaghetti with it', score: 65 },
  { answer: 'carrots because I like the way they are mushed when cooked', score: 29 },
  { answer: 'celery. My mom used to make ants on a log', score: 663 },
  { answer: "strawberries aren't a vegetable but they are my favorite anyway", score: 198 },
  { answer: 'corn, I like it on the cob and also frozen is the best', score: 20 },
  { answer: 'I like onions and the crunch. People do not know there are is so many different types', score: 492 },
  { answer: 'french green beans. Seems to be put in a lot of casseroles', score: 281 },
  { answer: 'cucumbers for health benefits and to fill me up when dieting', score: 408 },
  { answer: 'Lily - Its delicate beauty and sweet fragrance make it a timeless favorite', score: 404 },
  { answer: 'Rose - Its classic beauty and lovely scent evoke romance and elegance', score: 193 },
];

function sortScores(array) {
  array.sort((a, b) => b.score - a.score);
  return array;
}

function topArray(array) {
  let topArray = array.slice(0, array.length / 4);
  let topArrayNumber = Math.floor(Math.random() * topArray.length);
  if (topArrayNumber == topArray.length - 1) {
    return [topArray[topArrayNumber], topArray[topArrayNumber - 1]];
  } else {
    return [topArray[topArrayNumber], topArray[topArrayNumber + 1]];
  }
}

function midArray(array) {
  let midArray = array.slice(array.length / 4, array.length / 2);
  let midArrayNumber = Math.floor(Math.random() * midArray.length);
  if (midArrayNumber == midArray.length - 1) {
    return [midArray[midArrayNumber], midArray[midArrayNumber - 1]];
  } else {
    return [midArray[midArrayNumber], midArray[midArrayNumber + 1]];
  }
}

function midLowArray(array) {
  let midLowArray = array.slice(array.length / 2, array.length / 2 + array.length / 4);
  let midLowArrayNumber = Math.floor(Math.random() * midLowArray.length);
  if (midLowArrayNumber == midLowArray.length - 1) {
    return [midLowArray[midLowArrayNumber], midLowArray[midLowArrayNumber - 1]];
  } else {
    return [midLowArray[midLowArrayNumber], midLowArray[midLowArrayNumber + 1]];
  }
}

function bottomArray(array) {
  let bottomArray = array.slice(array.length / 2 + array.length / 4, array.length);
  let bottomArrayNumber = Math.floor(Math.random() * bottomArray.length);
  if (bottomArrayNumber == bottomArray.length - 1) {
    return [bottomArray[bottomArrayNumber], bottomArray[bottomArrayNumber - 1]];
  } else {
    return [bottomArray[bottomArrayNumber], bottomArray[bottomArrayNumber + 1]];
  }
}
function timeChanger(x) {
  // This function changes the scale of scores based on the time of day in San Francisco
  const d = new Date();
  const options = {
    timeZone: 'America/Los_Angeles', // Set the timezone to San Francisco
    hour12: false, // Display the time in 24-hour format
    hour: 'numeric',
  };
  if (d.toLocaleString('en-US', options) <= 12) {
    return x;
  } else if (d.toLocaleString('en-US', options) > 12) {
    return x.slice(0, x.length / 2);
  } else if (d.toLocaleString('en-US', options) > 21) {
    return x.slice(0, x.length / 3);
  } else if (d.toLocaleString('en-US', options) > 23) {
    return x.slice(0, x.length / 4);
  }
}

function algorithmBinder(array) {
  let stage1 = sortScores(array);
  let stage2 = timeChanger(stage1);
  let firstArray = topArray(stage2);
  let secondArray = midArray(stage2);
  let thirdArray = midLowArray(stage2);
  let fourthArray = bottomArray(stage2);

  return [firstArray, secondArray, thirdArray, fourthArray];
}

console.log(algorithmBinder(answerObj));
//each object in array represents a user and no. of yes or no
let inputs = [
  {
    yes: 5,
    no: 2,
  },
  {
    yes: 15,
    no: 9,
  },
  {
    yes: 1,
    no: 17,
  },
  {
    yes: 19,
    no: 0,
  },
];
//This function calculates the raw yes/no score with index weights but outputs final score
function calculateScores(inputs) {
  let scores = [];

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let yesValue = input.yes * (1 + input.yes * 0.05);
    let noValue = input.no * (1 + input.no * 0.05);
    let score = yesValue * 5 - noValue * 5;

    scores.push(score);
  }

  return spreadValues(scores);
}

function spreadValues(inputArray) {
  // Find the minimum and maximum values in the input array
  const minScore = Math.min(...inputArray);
  const maxScore = Math.max(...inputArray);

  // Spread the values proportionally using min-max normalization
  const spreadValues = inputArray.map((value) => {
    const normalizedValue = (value - minScore) / (maxScore - minScore);
    const spreadValue = 250 + normalizedValue * (990 - 250);
    return Math.round(spreadValue);
  });

  return spreadValues;
}

function randomizeEndValues(array) {
  // Find the highest and lowest numbers in the array
  let highest = array[0];
  let lowest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
    if (array[i] < lowest) {
      lowest = array[i];
    }
  }

  // Generate random numbers between 1 and 9
  const randomNumber1 = Math.floor(Math.random() * 9) + 1;
  const randomNumber2 = Math.floor(Math.random() * 9) + 1;

  // Add random number to the highest number and subtract from the lowest number
  for (let i = 0; i < array.length; i++) {
    if (array[i] === highest) {
      array[i] += randomNumber1;
    }
    if (array[i] === lowest) {
      array[i] -= randomNumber2;
    }
  }

  return array;
}

// function timeChanger(x) {
//   // This function changes the scale of scores based on the time of day in San Francisco
//   var d = new Date();
//   var options = {
//     timeZone: "America/Los_Angeles", // Set the timezone to San Francisco
//     hour12: false, // Display the time in 24-hour format
//     hour: "numeric",
//   };
//   if (d.toLocaleString("en-US", options) <= 09) {
//     return x.map((x) => Math.round(x * 0.15));
//   } else if (d.toLocaleString("en-US", options) > 09) {
//     return x.map((x) => Math.round(x * 0.3));
//   } else if (d.toLocaleString("en-US", options) > 12) {
//     return x.map((x) => Math.round(x * 0.45));
//   } else if (d.toLocaleString("en-US", options) > 15) {
//     return x.map((x) => Math.round(x * 0.6));
//   } else if (d.toLocaleString("en-US", options) > 18) {
//     return x.map((x) => Math.round(x * 0.75));
//   } else if (d.toLocaleString("en-US", options) > 21) {
//     return x.map((x) => Math.round(x * 0.9));
//   } else if (d.toLocaleString("en-US", options) > 23) {
//     return x;
//   }
// }

console.log(randomizeEndValues(calculateScores(inputs)));

console.log(timeChanger(randomizeEndValues(calculateScores(inputs))));

// NOTES BELOW

// max should be 850 + random 20
// more randomness at each (end 50 to 25)
// randomness decreases towards
// add time of day function
// starts 7am west coast
// 350 scores  5am
// 5:30 pacific every 3 hours give it 100
// 3 hour changes
// west coast midnight is end

// last few hours just show finalists
// half of the day half os the answers should be gone
// inputs could be how many votes are there going to be today & how many people are putting in questions
// DOM Manipulation

// document.getElementById("Answer1").textContent += algorithmBinder(answerObj)[0][0].answer;
// document.getElementById("Answer2").textContent += algorithmBinder(answerObj)[0][1].answer;
// document.getElementById("Answer3").textContent += algorithmBinder(answerObj)[1][0].answer;
// document.getElementById("Answer4").textContent += algorithmBinder(answerObj)[1][1].answer;
// document.getElementById("Answer5").textContent += algorithmBinder(answerObj)[2][0].answer;
// document.getElementById("Answer6").textContent += algorithmBinder(answerObj)[2][1].answer;
// document.getElementById("Answer7").textContent += algorithmBinder(answerObj)[3][0].answer;
// document.getElementById("Answer8").textContent += algorithmBinder(answerObj)[3][1].answer;
