const fs = require('fs');
const chalk = require('chalk');


//function to add a new note
const addnotes = (title, message) => {

    const notes = loadnotes();
    
    const duplicatenote = notes.find( (note) => note.Title === title);
    

    if(!duplicatenote){

        notes.push(
            {
                Title : title,
                Body : message,
                Date : getDate(),
                time : getTime()
            }
        )

        savenotes(notes);
        console.log(chalk.green.bold("Notes added successfully!"));




    }
    else{
        console.log(chalk.red.bold('Note title already taken!'));
    }


}

//function to load existing node from notes.json
const loadnotes = () =>{
    try{
         const databuffer = fs.readFileSync('notes.json');
         const notesjson = databuffer.toString();
         return JSON.parse(notesjson);
    }
    catch(err){
        return [];
    }
}

//function to save updated notes to the notes.json
const savenotes = (notes) => {
    const updatedjson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',updatedjson);
}


//function to get current date and time
const getDate = () =>{
     
    const today = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    const date = today.getDate()+' '+month[today.getMonth()]+' '+today.getFullYear();
    return date;
}


//function to get current time
const getTime = () =>{
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    const time = h+":"+m+":"+s;
    
    return time;
}

//function to check the time and change the digit
const checkTime = (i) => {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


//function remove the note of given title
const removenote = (title) => {
    const notes = loadnotes();
    const updatednotes = notes.filter((note) =>  note.Title !== title);
    
    if(notes.length === updatednotes.length){
        console.log(chalk.red.bold("Note of given title doesn't exist!"));
    }
    else{
        savenotes(updatednotes);
        console.log(chalk.green.bold(title+" - note is successfully removed!"));
    }

    
}

//function to list the notes

const listnotes = () =>{
    const notes = loadnotes();
    if(notes.length === 0){
        console.log(chalk.red.bold("Your notes is Empty!"));
    }
    else
    {
     console.log(chalk.bold.green.bold("Your notes....."));
     console.log(chalk.bold.white("_____________________________\n"));
    
    
    
     notes.forEach((note) => {
        console.log(chalk.magenta.bold("Title : ")+chalk.magenta.bold(note.Title));
        console.log(chalk.cyan.bold("Message : ")+chalk.cyan.bold(note.Body));
        console.log(chalk.magenta.bold("Date : ")+chalk.magenta.bold(note.Date));
        console.log(chalk.cyan.bold("Time : ")+chalk.cyan.bold(note.time));
        console.log(chalk.bold.white("_____________________________\n"));

     });
    }
    
    
}

//function to display the message and details of given note title
const readnotes = (title) =>{
   
   const notes = loadnotes();

   if(notes.length === 0){
    console.log(chalk.red.bold("Your notes is Empty!"));
   }
   else{
    
    const note = notes.find((note) => note.Title === title)

    if (note) {
        console.log(chalk.bold.white("_____________________________\n"));
        console.log(chalk.magenta.bold("Title : ")+chalk.magenta.bold(note.Title));
        console.log(chalk.cyan.bold("Message : ")+chalk.cyan.bold(note.Body));
        console.log(chalk.magenta.bold("Date : ")+chalk.magenta.bold(note.Date));
        console.log(chalk.cyan.bold("Time : ")+chalk.cyan.bold(note.time));
        console.log(chalk.bold.white("_____________________________\n"));
        
    } else {
        console.log(chalk.red.bold("There is no notes for given title!"));
    }

    

  
  }


}

//function to delete all notes

const delnotes = () =>{
    const notes = [];
    fs.writeFileSync('notes.json',notes);
    console.log(chalk.green.bold("All notes deleted successfully!"));
}



//exporting the functions
module.exports = {
    
    addNote: addnotes,
    removeNote : removenote,
    listNotes : listnotes,
    readNote : readnotes,
    delNotes : delnotes
}