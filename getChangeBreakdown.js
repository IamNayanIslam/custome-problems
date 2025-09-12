let log = console.log;

function getChangeBreakdown(amount) {
  // total number of notes to be returned
  let numberOfNotes = 0;
  // an array of available note denominations, in descending order
  let notes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  // an object to store the count for each note denomination
  let eachNoteCount = {};
  // the amount to be broken down, rounded down to the nearest integer
  let remainingAmount = Math.floor(amount);

  /*
   The commented-out code below is a long-form version of the same logic.
   The `for` loop below achieves the same result in a more concise and scalable way.
  */

  if (remainingAmount <= 0) {
    console.log("Your amount must be more than Zero!");
    // Return an object with zero counts to maintain consistent return type
    return {
      totalNoteCount: 0,
      notesBreakdown: {},
    };
  }

  // Loop through each note denomination
  for (let i = 0; i < notes.length; i++) {
    // Check if the remaining amount is greater than or equal to the current note
    if (remainingAmount >= notes[i]) {
      // Calculate how many of the current note can be used
      eachNoteCount[notes[i]] = Math.floor(remainingAmount / notes[i]);
      // Update the remaining amount by taking the remainder
      remainingAmount = remainingAmount % notes[i];
      // Add the count of the current note to the total number of notes
      numberOfNotes += eachNoteCount[notes[i]];
    }
  }

  /*
  if (remainingAmount >= 1000) {
    eachNoteCount.oneThousand = Math.floor(remainingAmount / 1000);
    numberOfNotes += eachNoteCount.oneThousand;
    remainingAmount = remainingAmount % 1000;
  }

  if (remainingAmount >= 500) {
    eachNoteCount.fiveHundred = Math.floor(remainingAmount / 500);
    numberOfNotes += eachNoteCount.fiveHundred;
    remainingAmount = remainingAmount % 500;
  }

  if (remainingAmount >= 200) {
    eachNoteCount.twoHundred = Math.floor(remainingAmount / 200);
    numberOfNotes += eachNoteCount.twoHundred;
    remainingAmount = remainingAmount % 200;
  }

  if (remainingAmount >= 100) {
    eachNoteCount.oneHundred = Math.floor(remainingAmount / 100);
    numberOfNotes += eachNoteCount.oneHundred;
    remainingAmount = remainingAmount % 100;
  }

  if (remainingAmount >= 50) {
    eachNoteCount.fifty = Math.floor(remainingAmount / 50);
    numberOfNotes += eachNoteCount.fifty;
    remainingAmount = remainingAmount % 50;
  }

  if (remainingAmount >= 20) {
    eachNoteCount.twenty = Math.floor(remainingAmount / 20);
    numberOfNotes += eachNoteCount.twenty;
    remainingAmount = remainingAmount % 20;
  }

  if (remainingAmount >= 10) {
    eachNoteCount.ten = Math.floor(remainingAmount / 10);
    numberOfNotes += eachNoteCount.ten;
    remainingAmount = remainingAmount % 10;
  }

  if (remainingAmount >= 5) {
    eachNoteCount.five = Math.floor(remainingAmount / 5);
    numberOfNotes += eachNoteCount.five;
    remainingAmount = remainingAmount % 5;
  }

  if (remainingAmount >= 2) {
    eachNoteCount.two = Math.floor(remainingAmount / 2);
    numberOfNotes += eachNoteCount.two;
    remainingAmount = remainingAmount % 2;
  }

  if (remainingAmount === 1) {
    eachNoteCount.one = Math.floor(remainingAmount / 1);
    numberOfNotes += eachNoteCount.one;
    remainingAmount = remainingAmount % 1;
  }
  */

  // Return an object containing both the total note count and the breakdown
  return {
    totalNoteCount: numberOfNotes,
    notesBreakdown: eachNoteCount,
  };
}

let amountToBreakdown = 4580;
let change = getChangeBreakdown(amountToBreakdown);
log("Amount: ", amountToBreakdown);
log("Number of Total Notes: ", change.totalNoteCount);
log("Breakdown of Notes:", change.notesBreakdown);

log("------------------------------------");

let anotherAmountToBreakdown = 89;
let anotherChange = getChangeBreakdown(anotherAmountToBreakdown);
log("Amount: ", anotherAmountToBreakdown);
log("Number of Total Notes: ", anotherChange.totalNoteCount);
log("Breakdown of Notes: ", anotherChange.notesBreakdown);
