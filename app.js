const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

yargs.version('1.1.0')

//add, remove, read, list notes

// Creating add command

yargs.command({
    command: 'add',
    describe:'Add a new note',
    handler: function(){
        console.log('Adding a new note')
    }

})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing a note')
    }
})

// Create List command

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        console.log('notes listed')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: function(){
        console.log('Reading note')
    }
})
console.log(yargs.argv)