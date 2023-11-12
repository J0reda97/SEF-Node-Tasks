// Task 2 :
// 1- to add 7 persons with ids from 1-7
// (id - fname - lname - age - city )
// 2- to delete id 4 - 6
// 3- to list fname & lname & city for all .
// 4- to read all data for only the 5th person .

////////////////////////////////////////////////////////

// Steps :
// require data file
// require yargs
// make add command
// make delete command
// make showall (except age) command
// make show command
// yargs parse

// require files
const data = require("./data.js");
const yargs = require("yargs");

// add command
yargs.command({
  command: "add",
  describe: "add person",
  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "person first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "person last name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "person age",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "person city",
      demandOption: true,
      type: "string",
    },
  },
  handler: (person) => {
    data.addPerson(
      person.id,
      person.fname,
      person.lname,
      person.age,
      person.city
    );
  },
});

// delete command
yargs.command({
  command: "delete",
  describe: "delete person",
  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (person) => {
    data.deletePerson(person.id);
  },
});

// show command
yargs.command({
  command: "show",
  describe: "show person",
  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (person) => {
    data.showPerson(person.id);
  },
});

// showall command
yargs.command({
  command: "showall",
  describe: "show all persons",
  handler: () => {
    data.showAll();
  },
});

yargs.parse();

// commands sequence

// 1- to add 7 persons with ids from 1-7
// (id - fname - lname - age - city )

// node app.js add --id="1" --fname="John" --lname="Smith" --age="30" --city="New York"
// node app.js add --id="2" --fname="Emily" --lname="Johnson" --age="25" --city="Los Angeles"
// node app.js add --id="3" --fname="Michael" --lname="Williams" --age="35" --city="Chicago"
// node app.js add --id="4" --fname="Sarah" --lname="Davis" --age="28" --city="Houston"
// node app.js add --id="5" --fname="David" --lname="Taylor" --age="45" --city="Miami"
// node app.js add --id="6" --fname="Jessica" --lname="Anderson" --age="32" --city="San Francisco"
// node app.js add --id="7" --fname="Matthew" --lname="Thompson" --age="27" --city="Seattle"

// 2- to delete id 4 - 6
// node app.js delete --id="4"
// node app.js delete --id="6"

// 3- to list fname & lname & city for all .
// node app.js showall

// 4- to read all data for only the 5th person .
// node app.js show --id="5"
