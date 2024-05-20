const { body, validationResult } = require("express-validator");
//const todoLists = require("./lib/seed-data");
const validator = (todoLists) => [
  body("todoListTitle")
    .trim()
    .isLength({ min: 1 })
    .withMessage("The list title is required.")
    .isLength({ max: 100 })
    .withMessage("List title must be between 1 and 100 characters.")
    .custom((title) => {
      let duplicate = todoLists.find((list) => list.title === title);
      return duplicate === undefined;
    })
    .withMessage("List title must be unique."),
];

module.exports = { validator };
