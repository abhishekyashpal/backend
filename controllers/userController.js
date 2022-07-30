var { User} = require('../database/userModel');

module.exports.createUser = async(req, res, next) => {
    try {
        return await User.create({
            name: req.body.name,
            address: req.body.address,
            isActive: req.body.isActive
        });
    } catch(err) {
        console.log('error while creating user', err);
    }
}

module.exports.getAllUser = async(req, res, next) => {
    try {
        return await User.findAll({
            where: {
                isActive: true
            }
        });
    } catch(err) {
        console.log('error while fetch all user', err);
    }
}

module.exports.getUserById = async(req, res, next) => {
    try {
        return await User.findOne({
            where: {
                id: req.params.id
            }
        });
    } catch(err) {
        console.log('error while fetch get user by id', err);
    }
}

module.exports.updateUser = async(req, res, next) => {
    try {
        return await User.update(
            {
                name: req.body.name,
                address: req.body.address
            }, 
            {
                where: {
                    id: req.params.id
                }
            }
        );
    } catch(err) {
        console.log('error while updating user', err);
    }
}

module.exports.deleteUser = async(req, res, next) => {
    try {
        return await User.destroy({
            where: { 
                id: req.params.id
            }
        });
    } catch(err) {
        console.log('error while deleting the user', err);
    }
}