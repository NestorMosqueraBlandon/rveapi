import Admin from "../models/Admin.js";
import getPagination from '../libs/getPagination.js'
import {generateToken} from '../libs/utils.js';

export const findAllAdmins = async(req, res) => {

    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const users = await Admin.paginate({}, {offset, limit });
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

export const createAdmin = async(req, res) =>{
    const user = new Admin({name: req.body.name, username: req.body.username,
    password: req.body.password });
    
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        username: createdUser.username,
        token: generateToken(createdUser),
    })
}

export const findOneAdmin = async(req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const deleteAdmin = async(req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({
        message: 'User were deleted successfully'
    });
}

export const signin = async (req, res) => {
    const admin = await Admin.findOne({username: req.body.username});
    if(admin)
    {
        if(req.body.password == admin.password)
        {
            res.send({
                _id: admin._id,
                username: admin.username,
                name: admin.name,
                token: generateToken(admin),
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