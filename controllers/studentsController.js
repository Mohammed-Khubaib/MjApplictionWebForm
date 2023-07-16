const Student = require('../models/Students')
const asynchandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @ desc GET all Students
// @ route GET /Students
// @ private
const getAllStudents = asynchandler (async (req, res) =>{

}
)
// @ desc create new Students
// @ route create /Students
// @ private
const createNewStudents = asynchandler (async (req, res) =>{

}
)
// @ desc edit Students
// @ route edit /Students
// @ private
const updateStudents = asynchandler (async (req, res) =>{

}
)
// @ desc delete Students
// @ route delete /Students
// @ private
const deleteStudents = asynchandler (async (req, res) =>{

}
)
module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}