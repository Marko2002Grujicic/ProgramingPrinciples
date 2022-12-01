/* Task 1: Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids"
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(job, geo, partner, kids) {
    console.log('You will be a ' + job + ' in ' + geo + ' and married to ' + partner + ' ' + ' with ' + kids + ' kids.');
}

tellFortune('Programmer', 'Italy', 'Angela', 2);
tellFortune('Actress', 'Spain', 'Mark', 1);
tellFortune('F1 driver', 'USA', 'Jennifer', 0);


/* Task 2:You know how old your dog is in human years, but what about dog years? Calculate it! Write a function named calculateDogAge that:
● takes 1 argument: your puppy&#39;s age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

function calculateDogAge(age) {
    var dogYears = age*7;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(7);
calculateDogAge(4);
calculateDogAge(1.5);

/* Task 3:Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amntPerDay) {
    var veryOld = 100;
    var total = (amntPerDay * 365) * (veryOld - age);
    console.log('You will need ' + total + ' cups of tea to last you until the ripe old age of ' + veryOld);
  }
  calculateSupply(20, 2);
  calculateSupply(45, 5);
  calculateSupply(14, 1);

/* Task 4: I t's hot out! Let's make a converter based on the steps here.Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output "NN°C is NN°F"
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output "NN°F is NN°C" */

function celsiusToFahrenheit(celsius) {
    var celsiusToF = (celsius*9)/5 + 32;
    console.log(celsius + '°C is ' + celsiusToF + '°F');
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitToC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F is ' + fahrenheitToC + '°C');
  }