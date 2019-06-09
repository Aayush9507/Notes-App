const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

//add, remove, read, list notes

// Creating add command

yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body:{
            describe: 'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }


})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    },
    
})

// Create List command

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder:{
        title:{
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'

        }
    },
    handler: (argv)=>{
        notes.readNotes(argv.title)
    }
})

yargs.parse()
