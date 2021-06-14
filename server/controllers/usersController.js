import User from '../models/User.js'

const getUsers = async (req, res) => {
    const users = await User.find({})
    res.json(users)
}

const getOneUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    if(user) {
        res.json(user)
    } else {
        res.status(404).json({msg: 'user not found'})
    }
}

export {getOneUser, getUsers}