function validateCNPJ (value) {
  let cleanValue = value.replace(/\.|-|\//g, '')
  if (cleanValue.length !== 14) {
    return false
  }

  if (/^(\d)\1*$/.test(cleanValue)) {
    return false
  }

  const [ digits, verifiedDigits ] = splitAtPosition(cleanValue, 12)
  const [ inputFirstVerifiedDigit, inputSecondVerifiedDigit ] = verifiedDigits
  const firstDigit = getVerifiedDigit(digits)
  if (firstDigit.toString() !== inputFirstVerifiedDigit) {
    return false
  }

  const secondDigit = getVerifiedDigit(digits + firstDigit)
  if (secondDigit.toString() !== inputSecondVerifiedDigit) {
    return false
  }

  return true
}

function splitAtPosition (value, position) {
  return [ value.slice(0, position), value.slice(position) ]
}

function getVerifiedDigit (digits) {
  const gen = generatorAuxiliarTable(digits.length)
  const firstDigitSum = digits.split('').reduce((prev, current) => {
    current = parseInt(current)
    const next = gen()
    // console.log(`prev: ${prev}, current: ${current}, next: ${next}`)
    return prev + (current * next)
  }, 0)
  const firstDigit = firstDigitSum % 11 < 2 ? 0 : 11 - (firstDigitSum % 11)
  return firstDigit
}

function generatorAuxiliarTable (size) {
  let value = size - 6
  return function () {
    value = value <= 2 ? 9 : value - 1
    return value
  }
}

export { validateCNPJ }
