let log = console.log;

function romanToIntiger(roman) {
  if (typeof roman !== "string" || roman === null) {
    return null;
  }

  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let capitalRoman = roman.toUpperCase();

  const validRomanRegex =
    /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  if (!validRomanRegex.test(capitalRoman)) {
    return "Invalid Input!!! Please write a valid Roman Number (e.g., 'MCMXCIV').";
  }

  if (capitalRoman.length === 1) {
    return vals[capitalRoman];
  }

  let result = 0;
  let prevVal = 0;

  for (let i = capitalRoman.length - 1; i >= 0; i--) {
    let currentVal = vals[capitalRoman[i]]; //10

    if (currentVal < prevVal /*100*/) {
      result -= currentVal;
    } else {
      result += currentVal;
    }

    prevVal = currentVal;
  }

  return result;
}

log(romanToIntiger("MCMXCIV")); //12  /= 94
log(romanToIntiger("LVI")); //56 /= 1 + 5 + 50
log(romanToIntiger("XC")); //90 /= 100
log(romanToIntiger("MMXXIV")); //2024
log(romanToIntiger("bnd")); //2024
