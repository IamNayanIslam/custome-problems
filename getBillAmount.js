let log = console.log;

function getBillAmount(electricityUnit) {
  // 1-50 unit  - BDT. 4 - rangeOne
  //51 - 100 unit - BDT. 6 - rangeTwo
  //101 - 150 unit - BDT. 7 - rangeThree
  //150 - 200 unit - BDT. 8 - rangeFour
  //201+ unit - BDT. 9

  let limitOne = 50;
  let limitTwo = 100;
  let limitThree = 150;
  let limitFour = 200;

  let rateOne = 4;
  let rateTwo = 6;
  let rateThree = 7;
  let rateFour = 8;
  let rateFive = 9;

  let billAmount = 0;

  let remainingUnit = electricityUnit;

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
  }

  return billAmount;
}
log(getBillAmount(650));
