// Denatra Antar
//ITMD 441-02 Undergraduate Student

//Excersise 1

console.log("\nExercise #1: Min, Max, Average of an array");
function minMaxAverage(numbers) {
    var totalNumbers = numbers.length;
    var minValue = numbers[0];
    var maxValue = numbers[0];
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if (num < minValue) minValue = num;
        if (num > maxValue) maxValue = num;
        sum = sum + num;
    }

    var average = sum / totalNumbers;

    console.log("Total Numbers: " + totalNumbers + ", Min Value: " + minValue + ", Max Value: " + maxValue + ", Average: " + average);
}

//Test case 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);

//Test case 2
minMaxAverage([4, 2, 16, 14, 3, 24, 40, 17]);

//Test case 3
minMaxAverage([23, 6, 4, 15, 55, 32, 12, 1]);

//Excersise 2

console.log("\nExercise #2: Counting Vowels");
function countVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    var lowerWord = word.toLowerCase();

    for (var i = 0; i < lowerWord.length; i++) {
        if (vowels.indexOf(lowerWord[i]) !== -1) {
            count++;
        }
    }

    if (count === 1) {
        console.log(word + ": " + count + " vowel");
    } else {
        console.log(word + ": " + count + " vowels");
    }
}

//Test case 1
countVowels("Denatra");

//Test case 2
countVowels("Watch");

//Test case 3
countVowels("Technology");

//Excersise 3

console.log("\nExercise #3: Sorting Numbers");
function sortNumbers(numbers) {
    var sorted = numbers.slice().sort(function(a, b) {
        return a - b;
    });

    console.log("Original Array: [" + numbers.join(", ") + "] output Sorted Array: [" + sorted.join(", ") + "]");
}

//Test case 1
sortNumbers([3, 16, 7, 12]);

//Test case 2
sortNumbers([19, 33, 3, 1]);

//Test case 3
sortNumbers([12, 5, 2, 16]);

//Excersise 4

console.log("\nExercise #4: C to F");
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius.toFixed(1) + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit");
}

//Test case 1
celsiusToFahrenheit(0); 

//Test case 2
celsiusToFahrenheit(23.5); 

//Test case 3
celsiusToFahrenheit(4); 

