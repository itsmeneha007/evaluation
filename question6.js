function rearrangeArray(numbers) {


    const removedNumbers = numbers.splice(0. 3);

    numbers.push(...removedNumbers);

    return numbers;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rearrangeArray(numbers));