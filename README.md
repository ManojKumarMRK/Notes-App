# Notes-App
Notes app which runs on node platform.

It is a note taking application which does not have graphical interface and it purely runs on CLI.

We can store a note by adding its title and message.

It will be saved with the date and time of adding.

The note title should be unique for every note which will help in removing particular node or reading particular node.

Yargs[npm module] is used to unleash the full power of command line arguments.

Chalk[npm module] is used to give some colors to CLI.

_________________________________________________________________________________________

User Instructions:

node app.js help -> [It shows the appropriate commands for all actions.]

Commands:
  app.js add     Add a note
  app.js remove  Remove a note
  app.js list    List all notes
  app.js read    Display the details of given note title
  app.js del     Delete all notes
  
Each commands required certain alias. You can see by typing as follows:

app.js [command] help

1]  app.js add help

    Description: Add a note

    Options:
      
      --title    Task Title                                      [string] [required]
      --message  Task Message                                    [string] [required]
      
      eg:   app.js add --title="grocery" --message="milk,vegetables,fruits"
      
2] app.js remove help


    Description: Remove a note

    Options:
      --title    Title of a note to be removed                   [string] [required]
      
      eg:   app.js remove --title="grocery"
      
3] app.js list help
 
       Description: Print all notes
       
       Options:
           
           It does not have any option
           
          eg:   app.js list
           
4] app.js read help


    Description: Displays a note of given title

    Options:
      --title    Title of a note to be displayed                  [string] [required]
      
      eg:   app.js read --title="grocery"
      
5] app.js list help
 
       Description: Delete all notes
       
       Options:
           
           It does not have any option
           
          eg:   app.js del
      
__________________________________________________________________________________________________
           
           
