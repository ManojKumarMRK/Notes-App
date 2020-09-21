const yargs = require('yargs');
const { listNotes } = require('./notes');
const notes = require('./notes');
  
//create a add comment
yargs.command({
    command: 'add',
    
    description: 'Add a note',

    builder:{
        title:{
            description: 'Task Title',
            demandOption: true,
            type: 'string'
        },
        message:{
            description: 'Task Message',
            demandOption: true,
            type: 'string'
        }

    },
    
    handler: (argv) => {
      notes.addNote(argv.title,argv.message)
    }
})


//creat a remove command
yargs.command({
    command: 'remove',
    
    desc: 'Remove a note',

    builder:{
      title:{
          description: 'Title of a note to be removed',
          demandOption: true,
          type: 'string'
      }
  },
    
    handler: (argv) => {
      notes.removeNote(argv.title)
    }
})


//create a list command  
yargs.command({
    command: 'list',
    
    desc: 'List all notes',
    
    handler: () => {
      notes.listNotes()
    }
})


//create a read command  
yargs.command({
    command: 'read',
    
    desc: 'Display the details of given note title',

    builder:{
      title:{
          description: 'Title of to be removed',
          demandOption: true,
          type: 'string'
      }
  },
    
    handler: (argv) => {
      notes.readNote(argv.title);
    }
})

//command to delete entire notes
yargs.command({
  command: 'del',
  
  desc: 'Delete all notes',
  
  handler: () => {
    notes.delNotes()
  }
})

yargs.parse()


  