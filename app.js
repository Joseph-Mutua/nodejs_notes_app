const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');
const log = console.log;

//Create add Commande
yargs.command({
    command: 'add',
    describe: "Add a new note",
    handler: function () {
        log("Adding a new note!");
    },
});



//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        log("Removing the note!");
    },
});

//List notes command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        log("Listing the Notes!");
    }
});

//Read notes Command
yargs.command({
    command: 'read',
    describe: 'List the notes',
    handler: function () {
        log("Reading the Notes!");
    }
});

log(yargs.argv);
