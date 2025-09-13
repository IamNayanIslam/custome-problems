// Problem: Write a function that takes a Roman numeral string as input and converts it into its corresponding integer value. The function should handle valid Roman numerals up to 3999 and include robust validation to ensure the input is in a correct format.

let log = console.log;

function romanToInt(roman) {
  // Check if the input is a valid string.
  // We return `null` for non-string or null values to indicate an invalid input type.
  if (typeof roman !== "string" || roman === null) {
    return null;
  }

  // A map to store the integer value for each Roman numeral character.
  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Convert the input string to uppercase to handle both lowercase and uppercase inputs.
  let capitalRoman = roman.toUpperCase();

  // A regular expression to validate the entire Roman numeral string against official rules.
  // This single regex checks for:
  // - Correct character combinations (e.g., CM, XL, IV).
  // - The maximum number of consecutive identical characters (e.g., no IIII).
  // - The correct order of numerals (e.g., IXC is invalid).
  const validRomanRegex =
    /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  if (!validRomanRegex.test(capitalRoman)) {
    // If the input doesn't match the valid pattern, return a specific error message.
    return "Invalid Input!!! Please write a valid Roman Number (e.g., 'MCMXCIV').";
  }

  // Initialize the result and a variable to hold the value of the previous numeral.
  let result = 0;
  let prevVal = 0;

  // Iterate through the Roman numeral string from right to left.
  // This approach is more efficient for handling subtractive cases.
  for (let i = capitalRoman.length - 1; i >= 0; i--) {
    let currentVal = vals[capitalRoman[i]];

    // Compare the current numeral's value with the previous one.
    if (currentVal < prevVal) {
      // If the current value is smaller, it's a subtractive case (e.g., IV or XC).
      // We subtract its value from the total.
      result -= currentVal;
    } else {
      // Otherwise, it's a standard case, and we add its value.
      result += currentVal;
    }

    // Update the previous value for the next iteration.
    prevVal = currentVal;
  }

  return result;
}

// Test cases to demonstrate the function's behavior.
log(romanToInt("MCMXCIV")); // Expected output: 1994
log(romanToInt("LVI")); // Expected output: 56
log(romanToInt("XC")); // Expected output: 90
log(romanToInt("MMXXIV")); // Expected output: 2024

// Test cases that will fail the validation check.
log(romanToInt("IIII")); // Expected output: "Invalid Input..."
log(romanToInt("VX")); // Expected output: "Invalid Input..."
log(romanToInt("IXC")); // Expected output: "Invalid Input..."
log(romanToInt("bnd")); // Expected output: "Invalid Input..."
