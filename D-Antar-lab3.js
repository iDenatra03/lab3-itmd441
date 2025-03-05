// Denatra Antar
//ITMD 441-02 Undergraduate Student

//Excersise 1

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

function sortNumbers(numbers) {
    var sorted = numbers.slice().sort(function(a, b) {
        return a - b;
    });
}