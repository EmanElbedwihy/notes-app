 const chalk =require('chalk') 
 const yargs=require('yargs')
 const notes =require('./notes.js')
 
 yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }    
})
yargs.command({
    command:'list',
    describe:'listing all notes',
    handler(){
        notes.listNodes()
    }    
})
yargs.command({
    command:'read',
    describe:'read notes ',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }    
})

yargs.parse()