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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

//List notes command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(argv) {
        notes.listNotes();
    }
});

//Read note Command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.parse();
