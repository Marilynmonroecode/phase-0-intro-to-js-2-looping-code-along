// Function to create thank you messages for each name
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

// Function to count down from a given number
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--; // Decrement the number to avoid infinite loop
    }
}
