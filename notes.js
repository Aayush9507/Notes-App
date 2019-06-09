const fs = require('fs')
const chalk =  require('chalk')
const getNotes = ()=> {
    return 'Your notes are here....'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    } else{
        console.log(chalk.red.inverse("Note title taken"))
    }

    
}

const removeNotes = (title) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)

    if (notes.length>notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note deleted"))
    }
    else{
        console.log(chalk.red.inverse("Note note found"))
    }
}
const loadNotes =  () => {

    try {
        const databuffer = fs.readFileSync('notes.json')
        const jsondata = databuffer.toString()
        return JSON.parse(jsondata)
    } catch (e) {
        return []
    }

}

const readNotes = (title)=>{
    const notes = loadNotes()

    const note = notes.find((note)=>note.title===title)

    if (note){
        console.log(chalk.blue.inverse(note.title))
        console.log(chalk.blue.inverse(note.body))
    }
    else{
        console.log(chalk.red.inverse("Note not found"))
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = () =>{
    console.log(chalk.inverse("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note)=>console.log(note.title)
    )
}
    
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}