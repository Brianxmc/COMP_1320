const lab2 = require("./lab2.js")

lab2.makeCalendar()
lab2.getDayOfTheWeek()

const getDayOfTheWeek = require("./lab2").getDayOfTheWeek
const makeCalendar = require("./lab2").makeCalendar
const readlineSync = require('readline-sync')

const year = readlineSync.question('Enter a year:')
const month = readlineSync.question('Enter a month:')
const date = readlineSync.question('Enter a date:')
getDayOfTheWeek(year,month,date)
console.log("You typed: ")
console.log(year,month,date)
console.log(lab2.getDayOfTheWeek(year, month, date))







