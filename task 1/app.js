// Task 1 :

// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )      // done
// 2) change obj to Json                                                                    // done
// 3) store in file                                                                         // done
// 4) read file (json)                                                                      // done
// 5) Convert to obj                                                                        // done
// 6) Update data to ( adel ahmed , 40 , cairo)                                             // done
// 7) convert obj to Json                                                                   // done
// 8) store in file (writeFileSync)                                                         // done

const fs = require("fs");

// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )
const person = {
  fname: "Ahmed",
  lname: "Hossam",
  age: 20,
  city: "Alex",
};

// 2) change obj to Json
const personJSON = JSON.stringify(person);

// 3) store in file
fs.writeFileSync("data.json", personJSON);

// 4) read file (json)
const dataJSON = fs.readFileSync("data.json").toString();

// 5) Convert to obj
let dataObj = JSON.parse(dataJSON);

// 6) Update data to ( adel ahmed , 40 , cairo)
dataObj.fname = "adel";
dataObj.lname = "ahmed";
dataObj.age = 40;
dataObj.city = "cairo";

// 7) convert obj to Json
const newDataJSON = JSON.stringify(dataObj);

// 8) store in file (writeFileSync)
fs.writeFileSync("newData.json", newDataJSON);
