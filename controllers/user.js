const {USER} = require('../model/user')

const getUser = async (req, res) => {
    try {
        const userData = await USER.find();
        res.json({
            status: 'Success',
            data: userData
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'There is an error finding the data: ' + error
        })
    }
}

const createUser = async (req, res) => {
    try {
       const {name, email, age, profile} = req.body;
       await USER.create({name, email, age, profile})
       res.json({
        status: 'Success',
        message: 'User created successfully'
    })
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'There is an error creating the data: ' + error
        })
    }
}

const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        const {name, age, email, profile} = req.body;
        await USER.findByIdAndUpdate(id, {name, age, email, profile});
        res.json({
            status: 'Success',
            message: 'User updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'There is an error updating the data: ' + error
        })
    }
}

const deleteUser =  async(req, res) => {

    try {      
        const {id} = req.params;
        const {name, email, profile, age} = req.body;
        await USER.findByIdAndDelete(id, {name, email, profile, age});
        res.json({
            status: 'Success',
            message: 'User deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'There is an error deleting the data: ' + error
        }) 
    }

}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}