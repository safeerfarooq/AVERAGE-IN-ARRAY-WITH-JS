const average = (...numbers) => {
    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    // Calculate the average of n.o
    return sum / numbers.length;
};

const result = average(4, 5, 2, 10, 4, 4, 5, 6, 10, 4);
console.log(result);