//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCtreatedDate = new Date(2023, 0, 23)
let myCtreatedDate1 = new Date(2023, 0, 23,5,3)
let myCtreatedDate2 = new Date("01-14-2023")
// console.log(myCtreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCtreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getUTCDate());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getMilliseconds());

// console.log(`${newDate.getMonth()} and the time`)


newDate.toLocaleString(`default`,{
    weekday : "long",

})
console.log(newDate);
