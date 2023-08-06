const fs=require('fs')
const chalk=require('chalk')

const addNote=(title,body)=>
{
    const notes=loadNotes()
    const duplicate=notes.find((note)=> note.title==title)

    if(!duplicate)
    {
        notes.push({
        title:title,
        body:body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('note is added'))
    }
    else
    {
        console.log(chalk.inverse.red('note is duplicated'))
    }
    
}
const removeNote=(title)=>
{
    const notes=loadNotes()
    const apdatedNotes=notes.filter((note)=>note.title!=title)
    if(apdatedNotes.length!=notes.length)
    {
        
        saveNotes(apdatedNotes)
        console.log(chalk.inverse.green('note is removed'))
    }
    else
    {
        console.log(chalk.inverse.red('note is not found'))
    }
    
}
const listNodes=()=>
{
    console.log(chalk.green.inverse('Your notes'))
    const notes=loadNotes()
    notes.forEach((note) => {
    console.log('title : '+note.title+' , body : '+note.body)
    })
}
const readNote=(title)=>
{
    const notes=loadNotes()
    const reqNote=notes.find((note)=> note.title==title)
    if(reqNote)
    {
        console.log(chalk.green.inverse(reqNote.title))
        console.log(reqNote.body)

    }
    else
    {
        console.log(chalk.red.inverse('note is not found'))

    }
}
const saveNotes=(notes)=>
{
    fs.writeFileSync('notes.json',JSON.stringify(notes))

}
const loadNotes=()=>
{
    try{
        const data=JSON.parse((fs.readFileSync('notes.json')).toString())
        return data
    }
    catch{
        return []
    }

}

module.exports={
addNote:addNote,
removeNote:removeNote,
listNodes:listNodes,
readNote:readNote
}