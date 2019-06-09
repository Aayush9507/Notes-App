const fs = require('fs')
const chalk =  require('chalk')
const getNotes = function () {
    return 'Your notes are here....'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){

        return  note.title === title
    })

    if (duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New note added")
    } else{
        console.log("Notes title taken")
    }

    
}

const removeNotes = function(title){

    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){

        return note.title !== title
    })

    if (notes.length>notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note deleted"))
    }
    else{
        console.log(chalk.red.inverse("Note note found"))
    }
    


}
const loadNotes = function () {

    try {
        const databuffer = fs.readFileSync('notes.json')
        const jsondata = databuffer.toString()
        return JSON.parse(jsondata)
    } catch (e) {
        return []
    }

}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes:removeNotes
}