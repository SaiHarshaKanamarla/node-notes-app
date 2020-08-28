// const name = 'Harsha Siddharth';

// var addNumbers = function(x,y){
//     return x+y;
// }

// var getNotes = function(){
//     return "Your Notes .....";
// }

// module.exports.name = name;
// module.exports.addNumbers = addNumbers;
// module.exports.getNotes = getNotes;

var fs = require('fs');

const addNote = function(title,body){
    const notes = loadNotes();
    var duplicateCheck = false;
    var currentTitle = title;

    if(notes.length > 0){
        for(var i=0;i<notes.length;i++){
            if(notes[i].title === title){
                duplicateCheck = true;
                break;
            }
        }
    }else{
        console.log("No notes present to verify");
    }



    // if(duplicateNotes.length == 0){
        if(duplicateCheck == false){
        notes.push({
            title : title,
            body : body
        });
        console.log("New Note added");
        saveNotes(notes);
    }else{
        console.log("Duplicate title.")
    }    
    
}

const removeNotes = function(notes){
    try{
        const buffer = fs.readFileSync('notes.json');
        const notesData = buffer.toString();
        const data = JSON.parse(notesData);
        var myNote_title = notes;
        console.log(myNote_title);
        for(var i=0;i<data.length;i++){           
            if(data[i].title === myNote_title){                
                data.splice(i,1)               ;
            }
        }
        saveNotes(data);
    }catch(e){
        return [];
    }


}

const saveNotes = function(notes){
    const datanotes = JSON.stringify(notes)
    fs.writeFileSync('notes.json',datanotes);
}

const loadNotes = function(){
    try{
        const buffer = fs.readFileSync('notes.json');
        const notesData = buffer.toString();
        const data = JSON.parse(notesData);
        return data;
    }catch(e){
        return [];
    }
    
}

const listNotes = function(){
    try{
        const buffer = fs.readFileSync('notes.json');
        const notesData = buffer.toString();
        const data = JSON.parse(notesData);        
        for(var i=0;i<data.length;i++){
            console.log(data[i].title+" "+data[i].body);
        }
    }catch(e){
        return [];
    }
}

const readNote = function(mytitle){
    try{
        const buffer = fs.readFileSync('notes.json');
        const notesData = buffer.toString();
        const data = JSON.parse(notesData);        
        for(var i=0;i<data.length;i++){
            if(data[i].title == mytitle){                
                console.log(data[i].body);
                break;
            }
        }
    }catch(e){
        return [];
    }
}

module.exports.addNote = addNote;
module.exports.removeNotes = removeNotes;
module.exports.listNotes = listNotes;
module.exports.readNote = readNote;