const fs = require('fs')
const chalk = require('chalk')
const log = console.log;

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.green.inverse('New note added!'))
    }
    else {
        log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else {
        log(chalk.red.inverse('No note found!'))
    }
};

const listNotes = () => {
    const notes = loadNotes();
    log(chalk.inverse("YOUR NOTES"));
    notes.forEach((note) => {
        log(chalk.bold.yellow.underline(note.title));
        log(chalk.blue(note.body));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        log(chalk.bold.yellow.underline(noteToRead.title));
        log(noteToRead.body);
    }
    else {
        log(chalk.bgRed("Note not Found!"));
    }

};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
