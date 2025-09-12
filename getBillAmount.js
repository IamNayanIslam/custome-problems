// Problem Description:
// This program calculates a total electricity bill based on a tiered rate system.
// The cost per unit changes as the total electricity usage increases.
// The rates are as follows:
// - 1-50 units: BDT. 4 per unit
// - 51-100 units: BDT. 6 per unit
// - 101-150 units: BDT. 7 per unit
// - 151-200 units: BDT. 8 per unit
// - 201+ units: BDT. 9 per unit

let log = console.log;

/**
 * Calculates the total electricity bill based on tiered rates.
 * @param {number} electricityUnit The total number of electricity units consumed.
 * @returns {number} The total bill amount.
 */
function getBillAmount(electricityUnit) {
  // Check for invalid input. Usage must be a positive number.
  if (electricityUnit <= 0) {
    log("Your Electricity Usage Must Be More Than Zero Unit");
    return 0;
  }

  // Define the billing tiers with their starting unit and rate.
  // The tiers are arranged in descending order to simplify the calculation
  // by processing the highest-priced units first.
  let remainingUnit = electricityUnit;
  let billAmount = 0;
  const tiers = [
    { start: 201, rate: 9 }, // Rate for units 201 and above
    { start: 151, rate: 8 }, // Rate for units 151-200
    { start: 101, rate: 7 }, // Rate for units 101-150
    { start: 51, rate: 6 }, // Rate for units 51-100
    { start: 1, rate: 4 }, // Rate for units 1-50
  ];

  // Iterate through the tiers, starting with the highest rate.
  for (const tier of tiers) {
    // Check if the remaining units consumed fall into the current tier.
    if (remainingUnit >= tier.start) {
      // Calculate the number of units in this specific tier.
      const unitInThisTire = remainingUnit - tier.start + 1;

      // Add the cost of this tier's units to the total bill.
      billAmount += unitInThisTire * tier.rate;

      // Subtract the units that have just been billed from the remaining total.
      // This is the crucial step to prevent units from being counted multiple times.
      remainingUnit -= unitInThisTire;
    }
  }

  /* let limitOne = 50;
  let limitTwo = 100;
  let limitThree = 150;
  let limitFour = 200;

  let rateOne = 4;
  let rateTwo = 6;
  let rateThree = 7;
  let rateFour = 8;
  let rateFive = 9;

  if (electricityUnit <= 0) {
    console.log("Your Electricity Usage Must Be More Than Zero Unit");
    return 0;
  }

  //Tire Five: for more than 200 unit usage

  if (remainingUnit > limitFour) {
    billAmount += (remainingUnit - limitFour) * rateFive;
    remainingUnit = limitFour;
  }

  //Tire Four: for more than 150 unit usage

  if (remainingUnit > limitThree) {
    billAmount += (remainingUnit - limitThree) * rateFour;
    remainingUnit = limitThree;
  }

  //Tire Three: for more than 100 unit usage

  if (remainingUnit > limitTwo) {
    billAmount += (remainingUnit - limitTwo) * rateThree;
    remainingUnit = limitTwo;
  }

  //Tire Two: for more than 50 unit usage

  if (remainingUnit > limitOne) {
    billAmount += (remainingUnit - limitOne) * rateTwo;
    remainingUnit = limitOne;
  }

  //Tire One: for less than/qual to 50 unit usage

  if (remainingUnit <= limitOne) {
    billAmount += remainingUnit * rateOne;
    remainingUnit = 0;
  }*/

  return billAmount;
}

// --- Test Cases ---
// Test with a low number of units (within the first tier).
log(`Total Bill Amount for 37 units: ${getBillAmount(37)}`); // Expected output: 148 (37 * 4)

// Test with a number of units that crosses multiple tiers.
log(`Total Bill Amount for 120 units: ${getBillAmount(120)}`); // Expected output: 640
// Breakdown: (50 * 4) + (50 * 6) + (20 * 7) = 200 + 300 + 140 = 640

// Test with a large number of units that hits the highest tier.
log(`Total Bill Amount for 377 units: ${getBillAmount(377)}`); // Expected output: 2843
// Breakdown: (50 * 4) + (50 * 6) + (50 * 7) + (50 * 8) + (177 * 9) = 200 + 300 + 350 + 400 + 1593 = 2843

// Test with invalid input (negative number).
log(`Total Bill Amount for -10 units: ${getBillAmount(-10)}`); // Expected output: 0 and a log message
