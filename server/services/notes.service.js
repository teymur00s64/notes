const Notes = require("../models/Notes");

const createNote = async (params) => {
    const {title, content, userId} = params

    let note = await Notes.create({
        title,
        content,
        userId
    })
};

const findByUserId = async (user) => {
    const notes = await Notes.findAll({where: {user}})
    return notes
};

const findNote = async (id) =>{
    let note = await Notes.findOne({where: {id}})
    return note
};

const findAll = async (userId) => {
    const notes = await Notes.findAll({where: {userId}})
    return notes
};

const updateNote = async (id, params) => {
    let {title, content} = params
    const note = await Notes.findOne({where: {id}})
    console.log(note)
    await note.update({title})
    await note.update({content})

    await note.save()

    return note
}

const deleteNote = async (id) =>{
    let note = await Notes.destroy({where: {id}})
    return note
};

const deleteAll = async () =>{
    let note = await Notes.truncate()
    return note
};
 
module.exports = { 
    createNote,
    findNote,
    findAll,
    updateNote,
    deleteNote,
    deleteAll,
    findByUserId
};