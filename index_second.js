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

console.log("VAR3_common:", process.env.VAR3_common);
