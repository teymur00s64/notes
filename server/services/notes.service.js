const Notes = require("../models/Notes");

const createNote = async (params) => {
    const {title, content, userId} = params || {}
    let note = await Notes.create({
        title,
        content,
        userId
    })
    return note
};

const findNote = async (id, userId) =>{
    let note = await Notes.findOne({where: {id}, userId})
    return note
};

const findAllByUser = async (userId) => {
    const notes = await Notes.findAll({where: {userId}})
    return notes
};

const updateNote = async (params) => {
    let {id,userId ,title , content} = params
    const note = await Notes.findOne({where: {id} , userId})
    await note.update({title})
    await note.update({content})

    await note.save()

    return note
}

const deleteNote = async (id,userId) =>{
    let note = await Notes.destroy({where: {id} , userId})
    return note
};

const deleteAll = async (params) =>{
    let note = await Notes.destroy({where: params})
    return note
};
 
module.exports = { 
    createNote,
    findNote,
    findAllByUser,
    updateNote,
    deleteNote,
    deleteAll,
};