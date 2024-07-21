const { notesService } = require("../services");

const createNote = async (req,res) =>{
    try {
    let user = await notesService.createNote(req.body)
    res.json( {
        status: true,
        message:"note created",
        user
    })} catch (error) {
       res.status(400).json({
        message: error?.message
       }) 
    }
};

const findAll = async (req, res) =>{
    try {
        let notes = await notesService.findAll()
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
        let {id} = req.params
        let note = await notesService.updateNote(id ,req.body)
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
    let note = await notesService.deleteNote(id)
    res.json({note})
    } catch(error) {
        res.status(500).json({
            message: error?.message
        })
    }
};

const deleteAll = async (req, res) =>{
    try{
    let note = await notesService.deleteAll()
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
    findAll,
    updateNote,
    deleteNote,
    deleteAll
};