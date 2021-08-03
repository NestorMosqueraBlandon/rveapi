import User from "../models/User.js";
import getPagination from '../libs/getPagination.js'
import {generateToken} from '../libs/utils.js';
import bcrypt from 'bcrypt';
export const findAllUsers = async(req, res) => {

    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const users = await User.paginate({}, {offset, limit });
        res.json({
            totalItems: users.totalDocs,
            users: users.docs,
            totalPages: users.totalPages,
            currentPage: users.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}

export const createUser = async(req, res) =>{
    const newUser = new User({name: req.body.name, email: req.body.email, password: req.body.password})
    const userCreated = await newUser.save();
    res.json(userCreated);
}

export const findOneUser = async(req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const deleteUser = async(req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({
        message: 'User were deleted successfully'
    });
}

export const signin = async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if(user)
    {
        if(bcrypt.compareSync(req.body.password, user.password))
        {
            res.send({
                _id: user._id,
                username: user.username,
                name: user.name,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }else{
            res.status(500).json({
                message: 'Password incorrect'
            })
        }
    }else{
        res.status(500).json({
            message: 'User dont exits'
        })
    }
}