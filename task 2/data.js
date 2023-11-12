const fs = require("fs");

// add person
const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();

  const duplicatedData = allData.filter((person) => {
    return person.id === id;
  });

  if (duplicatedData.length === 0) {
    allData.push({
      id,
      fname,
      lname,
      age,
      city,
    });
    console.log("User Added Successfully");

    saveAllData(allData);
  } else {
    console.log("Error: Dullicated ID");
  }
};

// load old Data
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

// save all data
const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data.json", saveAllDataJson);
};

// delete person
const deletePerson = (id) => {
  const allData = loadData();

  const keptData = allData.filter((person) => {
    return person.id !== id;
  });

  console.log("User Deleted Successfully");

  saveAllData(keptData);
};

// show person
const showPerson = (id) => {
  const allData = loadData();

  const person = allData.find((person) => {
    return person.id === id;
  });

  if (person) {
    console.log(person);
  } else {
    console.log("User Not Found");
  }
};

// show all persons
const showAll = () => {
  const allData = loadData();

  allData.forEach((person) => {
    console.log(
      `Name: ${person.fname} ${person.lname} => City: ${person.city}`
    );
  });
};

// export functions

module.exports = {
  addPerson,
  deletePerson,
  showPerson,
  showAll,
};
