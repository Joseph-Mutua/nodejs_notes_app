const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const log = console.log;

log(chalk.blue("Success!", "Wwwwwooow", chalk.underline("Mutua!!")));
log(chalk.red.bold("Error"))

log(getNotes());
log(validator.isURL('fuktrrrumpandcruz.io'));
