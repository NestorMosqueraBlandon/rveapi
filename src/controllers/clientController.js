import Client from "../models/Client.js";
import getPagination from '../libs/getPagination.js'
import {generateToken} from '../libs/utils.js';

export const findAllClients = async(req, res) => {
    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const clients = await Client.paginate({}, {offset, limit });
        res.json({
            totalItems: clients.totalDocs,
            users: clients.docs,
            totalPages: clients.totalPages,
            currentPage: clients.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}

export const createClient = async(req, res) =>{
    const newClient = new Client({name: req.body.name, source: req.body.source, email: req.body.email})
    const clientCreated = await newClient.save();
    res.json(clientCreated);
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