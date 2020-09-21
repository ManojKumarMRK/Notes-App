# Notes-App
Notes app which runs on node platform.

It is a note taking application which does not have graphical interface and it purely runs on CLI.

We can store a note by adding its title and message.

It will be saved with the date and time of adding.

The note title should be unique for every note which will help in removing particular node or reading particular node.

_________________________________________________________________________________________

User Instructions:

node app.js help -> [It shows the appropriate commands for all actions.]

Commands:
  app.js add     Add a note
  app.js remove  Remove a note
  app.js list    List all notes
  app.js read    Display the details of given note title
  app.js del     Delete all notes
  
Each commands required certain alias. That you can see by typing as follows:

app.js [command] help

1]  app.js add help

    Add a note

    Options:
      
      --title    Task Title                                      [string] [required]
      --message  Task Message                                    [string] [required]
      
      eg:   app.js add --title="grocery" --message="milk,vegetables,fruits"
      
2] app.js remove help


     Remove a note

    Options:
      --title    Title of a note to be removed                   [string] [required]
      
      eg:   app.js add --title="grocery"
      
3] app.js list help
 
       Print all notes
       
       Options:
           
           It does not have any option
           
          eg:   app.js list
           
4] app.js read help


    Displays a note of given title

    Options:
      --title    Title of a note to be displayed                  [string] [required]
      
      eg:   app.js read --title="grocery"
      
__________________________________________________________________________________________________
           
           
