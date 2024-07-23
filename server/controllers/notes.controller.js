const { notesService } = require("../services");

const createNote = async (req,res) =>{
    try {
    const {user} = req
    let params = {...req.body, userId: user.id}
    let note = await notesService.createNote(params)
    res.json( {
        status: true,
        message:"note created",
        note
    })} catch (error) {
       res.status(400).json({
        message: error?.message
       }) 
    }
};

const findAllByUser = async (req, res) =>{
    try {
        const {user} =req
        const param = user.id
        let notes = await notesService.findAllByUser(param)
        res.json({notes})
    } catch (error) {
        res.status(500).json({
            message: error?.message
        })
    }
};

const findNote = async (req, res) =>{
    try {
        let  {id} = req.params
        let note = await notesService.findNote(id)
        res.json({note})
    } catch (error) {
        res.status(500).json({
            message: error?.message
        })
    }
};

const updateNote = async (req, res) =>{
    try {
        let {user} = req
        let param = { ...req.params, userId: user.id ,...req.body}
        let note = await notesService.updateNote(param)
        res.json( {
            note
        })} catch (error) {
           res.status(400).json({
            message: error?.message
           }) 
        }
};

const deleteNote = async (req, res) =>{
    try{
    let {id} = req.params
    let {user} = req
    let param = {userId: user.id}
    let note = await notesService.deleteNote(id, param)
    res.json({note})
    } catch(error) {
        res.status(500).json({
            message: error?.message
        })
    }
};

const deleteAll = async (req, res) =>{
    try{
    let {user} = req
    let param = {userId: user.id}    
    let note = await notesService.deleteAll(param)
    res.json({note})
    } catch(error) {
        res.status(500).json({
            message: error?.message
        })
    }
};

module.exports = {
    createNote,
    findNote,
    findAllByUser,
    updateNote,
    deleteNote,
    deleteAll,
};