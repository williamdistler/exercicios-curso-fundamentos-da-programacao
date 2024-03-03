function inverso(input) {
  if (typeof input == 'boolean') {
    return !input;
  } else if (typeof input == 'number') {
    return -input;
  } else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof input}`;
  }
}

console.log(inverso(true)) // false
console.log(inverso("6")) // booleano ou número esperados, mas o parâmetro é do tipo string
console.log(inverso(-2000)) // 2000
console.log(inverso("programação")) // booleano ou número esperados, mas o parâmetro é do tipo string