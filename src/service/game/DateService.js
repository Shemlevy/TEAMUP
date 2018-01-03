// time === to time from obj

var HOUR = '02:00 PM';

var startTime = new Date();
var parts = HOUR.match(/(\d+):(\d+) (AM|PM)/);

var timeStr = getTime()

function getTime() {
  if (parts) {
    var hours = parseInt(parts[1]),
      minutes = parseInt(parts[2]),
      tt = parts[3];
    if (tt === 'PM' && hours < 12) hours += 12;
    let timeStr = hours.toString() + ':' + minutes.toString()
  }
  return timeStr 
}


//then date == date from obj

const dateStr = timeStr + date
const currDate = new Date(dateStr)




