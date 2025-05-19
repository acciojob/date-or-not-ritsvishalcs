var isDate = function (input) {
  //   write your code here
	function isDate(input) {
  // Check if it's a Date object and valid
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // Try to parse string/number into a Date
  const parsed = new Date(input);
  return !isNaN(parsed.getTime());
}

};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
