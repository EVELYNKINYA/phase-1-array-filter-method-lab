// Code your solution here
// findMatching function
function findMatching(drivers, name) {
    // Use filter to find all drivers that match the passed-in name
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
// fuzzyMatch function
function fuzzyMatch(drivers, letters) {
    // Use filter to find drivers where the name starts with the provided letters
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  //  matchName function
function matchName(drivers, name) {
    // Use filter to find drivers with the provided name
    return drivers.filter(driver => driver.name === name);
  }
  