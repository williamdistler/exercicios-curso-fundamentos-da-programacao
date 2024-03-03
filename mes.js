/**
 * Crie uma função que receber um número (de 1 a 12) e retorne o Mês correspondente
 * como uma string. Por exemplo, se função deverá retornar "fevereiro", pois este
 * é o 2º mês.
 * Exemplos:
 * nomeDoMes(1) // retornará "janeiro"
 * nomeDoMes(4) // retornará "abril"
 */

function nomeDoMes(mes) {
  switch(mes) {
    case 1:
      return 'janeiro'
    case 2:
      return 'fevereiro'
    case 3:
      return 'março'
    case 4:
      return 'abril'
    case 5:
      return 'maio'
    case 6:
      return 'junho'
    case 7:
      return 'julho'
    case 8:
      return 'agosto'
    case 9:
      return 'setembro'
    case 10:
      return 'outubro'
    case 11:
      return 'novembro'
    case 12:
      return 'dezembro'
    default:
      return 'Mês inexistente'
  }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))