/******************************/
//Your Code Here 
function dayOfWeek(day){
switch(day){
case 1: return "Monday"
case 2: return "Tuesday"
case 3: return "Wednesday"
case 4: return "Thurday"
case 5: return "Friday"
case 6: return "Saturday"
case 7: return "Sunday"
  }
}
console.log(dayOfWeek(1))


function identifySeason(num) {
  switch(num){
    case 12:
    case 1:
    case 2: 
    return "Winter"
    case 3:
    case 4:
    case 5: return "Spring"
    case 6:
    case 7:
    case 8: return "Summer"
    case 9: 
    case 10: 
    case 11: return "Autumn"

  }
}

function menuSelection(selection){
  switch(selection){
    case 1: return "you selected option 1"
    case 2: return "you selected option 2"
    case 3: return "you selected option 3"
    default: return "invalid selection"
  }
}
console.log(menuSelection(3))


/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  