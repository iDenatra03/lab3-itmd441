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