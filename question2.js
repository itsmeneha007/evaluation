

function calculateSum(numbers) {
    let total = 0;
    numbers.forEach(function(number) {
        total += number;
    });
    return total;
}

const numbers = [1, 2, 3, 4, 5];

console.log(calculateSum(numbers));