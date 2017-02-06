var moment = require('moment');

console.log(moment().format());

// 1 Jan 1970 @ 12:00am -> 0 (UNIX timestamp)
// 1 Jan 1970 @ 12:01am -> 60 (UNIX timestamp)

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1486398048;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, Y @ h:mm a'));

// January 3rd, 2017 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, Y @ h:mm A'));