function getDayOfTheWeek(year, month, day) {
    const remainder = year % 100
    const step1 = Math.floor(remainder / 12) 
    const step2 = remainder % 12
    const step3 = Math.floor(step2 / 4)
    let monthCodes = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]
    if (isLeapYear(year)) {
        monthCodes[0] = 0
        monthCodes[1] = 3
    }
    let step5 = monthCodes[month]
    if (1600 <= year < 1700 || 2000 <= year < 2100) {
        step5 += 6
    } else if (1700 <= year < 1800 || 2100 <= year < 2200) {
        step5 += 4
    } else if (1800 <= year < 1900) {
        step5 += 2
    }
    const step6 = step1 + step2 + step3 + day + step5
    const weekdays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    return weekdays[step6 % 7]
}

// site from: https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function makeCalendar(){
    const day = new Date(2022, 0, 1)
    for (let i = 0; i < 365; i++) {
        const dayoftheweek = getDayOfTheWeek(2022, day.getMonth(), day.getDate())
        console.log(day.getDate() + '-' + (day.getMonth() + 1) + '-' + 2022 + ' is ' + dayoftheweek)
        day.setDate(day.getDate() + 1);
    }
}

module.exports = {
   getDayOfTheWeek,
   isLeapYear,
   makeCalendar,

}