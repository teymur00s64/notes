const { notesService } = require("../services");

const createNote = async (req,res) =>{
    const {user} = req
    let params = {...req.body, userId: user.id}
    let note = await notesService.createNote(params)
    res.json( {
        status: true,
        message:"note created",
        note
    })
};

const findAllByUser = async (req, res) =>{
        const {user} =req
        const param = user.id
        let notes = await notesService.findAllByUser(param)
        res.json(notes)
};

const findNote = async (req, res) =>{
        let  {id} = req.params
        let note = await notesService.findNote(id)
        res.json(note)
};

const updateNote = async (req, res) =>{
        let {user} = req
        let param = { ...req.params, userId: user.id ,...req.body}
        let note = await notesService.updateNote(param)
        res.json(note)
};

const deleteNote = async (req, res) =>{
    let {id} = req.params
    let {user} = req
    let param = {userId: user.id}
    let note = await notesService.deleteNote(id, param)
    res.json(note)
};

const deleteAll = async (req, res) =>{
    let {user} = req
    let param = {userId: user.id}    
    let note = await notesService.deleteAll(param)
    res.json(note)
};

module.exports = {
    createNote,
    findNote,
    findAllByUser,
    updateNote,
    deleteNote,
    deleteAll,
};