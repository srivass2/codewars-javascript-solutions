/*
Description:
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

  */

  const strCount = (obj) => {
    let count = 0;
     for (const key in obj) {
        //console.log(obj[key]);
        if(typeof(obj[key]) === "string"){
            count++;
        }
        // if(Array.isArray(obj[key])) {
        //     count += obj[key].filter((a) => typeof(a) === "string").length
        // }
        if(typeof(obj[key]) === "object") {
            count += strCount(obj[key]);
        }
     }
     return count;
     
  }
  console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }));
  