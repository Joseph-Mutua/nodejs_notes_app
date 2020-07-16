const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');
const log = console.log;

//Create add Commande
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    },
});



//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
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
    },
});

yargs.parse()
