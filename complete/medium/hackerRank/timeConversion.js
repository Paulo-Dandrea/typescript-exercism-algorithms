function timeConversion(s) {
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    
    if (AMPM === "AM" && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    
    return timeArr.join(":");
}

// console.log(timeConversion("09:01:00PM"));
// console.log(timeConversion("09:01:00AM"));

// console.log(timeConversion("12:01:00PM"));
// console.log(timeConversion("12:01:00AM"));

console.log(timeConversion("06:40:03AM"));
