
var fs = require('fs');
var yargs = require('yargs');
var validator = require('validator');
var obj = require('./utils.js');
// fs.writeFileSync('notes.txt', 'My name is Harsha.');


//  console.log(obj.name);

//  console.log(obj.addNumbers(4,5));

//  var notes = obj.getNotes();

//   console.log(validator.isEmail(notes));

//  console.log(validator.isEmail('siddharth.landers@kvniso.com'));
//  console.log(validator.isURL('https://www.google.com'));

// var chalk = require('chalk');

// console.log(chalk.green.inverse.underline("Hello World"));

// accessing command line arguments.

// console.log(process.argv);

// const command = process.argv[2];

// if(command === 'add'){
//     console.log("User chose adding note")
// }else{
//     console.log("User chose to remove a note");
// }
// Customize yargs version
 
yargs.version('1.1.0');

//Create add command

yargs.command({
    command : 'add',        // naming our command, what is it actually.
    describe : 'Add a new note', // providing an abstrat desccription of the command.
    builder : {                 // an object we give option that we want it to support.
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type:'string'
        }
    },
    handler : function(argv){       // code that runs when someone uses the add command.
        obj.addNote(argv.title,argv.body);
    }
})

//Create a remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder:{
        title : {
            describe : 'Removal of a Note',
            demandOption : true,
            type: 'string'
        },
        body : {
            describe : 'Action after note removal',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){        
        obj.removeNotes(argv.title);
    }
})

//creating a list command
yargs.command({
    command : 'list',
    description: 'Listing a note',
    handler : function(){
        //console.log("Displaying a List");
        obj.listNotes();
    }
})

//creating a read option
yargs.command({
    command : 'read',
    description: 'Reading all notes',
    handler : function(argv){
        obj.readNote(argv.title);
    }
})

// add,read,remove,list


//console.log(yargs.argv);
yargs.parse();