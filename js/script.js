function converter() {
  var anoLuz = document.getElementById('box')
  var result = document.getElementById('result')

  if (anoLuz.value.length == 0) {
    alert('Você precisa digitar um número maior que 0.')
  } else {
    var anoLuzNumero = Number(anoLuz.value)
    var km = 9460800000000
      result.innerHTML = `<br> ${anoLuzNumero*km} Km`
  }
}
