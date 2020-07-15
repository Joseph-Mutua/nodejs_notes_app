const fs = require("fs");
const log = console.log;

const getNotes = function () {
    return "Your Notes ...";
};


const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title = title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        
    saveNotes(notes)
    log("New Note Added!");
    
    }
    else {
        log("Note Title Taken!");
    }


};


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

}


const loadNotes = function () {
    try {
        const dataBurfer = fs.readFileSync('notes.json')
        const dataJSON = dataBurfer.toString();
        return JSON.parse(dataJSON);

    }
    catch (e) {
        return [];
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote
};
