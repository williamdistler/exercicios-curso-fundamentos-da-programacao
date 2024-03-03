function maiorOuIgual(num1, num2) {
  if (typeof num2 === 'string')
    return false;
  else if (num1 >= num2)
    return true;
  else
    return false;
}

console.log(maiorOuIgual(0, 0)) // true
console.log(maiorOuIgual(0, "0")) // false
console.log(maiorOuIgual(5, 1)) // false