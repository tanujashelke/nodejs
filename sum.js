function s(num) {
    let numStr = num.toString();
    let sum = 0;
    for (let digit of numStr) {
        sum += parseInt(digit);

    }
    return sum;
}
console.log(s(4666));