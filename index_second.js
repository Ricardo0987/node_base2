console.log("test 2");
require("dotenv").config();

console.log(process.env);

const figlet = require("figlet");

const myVar = process.env.VAR_REPO_2;
console.log(
  figlet.textSync(myVar, {
    //   font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);

console.log("DATA_RECEIVED:", process.env.DATA_RECEIVED);
