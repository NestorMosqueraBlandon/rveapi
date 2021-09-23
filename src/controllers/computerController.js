import Computer from '../models/Computer.js';
import getPagination from '../libs/getPagination.js';
import { generateToken } from '../libs/utils.js';

export const findAllComputers = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);

    const computers = await Computer.find({});
    res.json({
      // totalItems: clients.totalDocs,
      computers: computers,
      // totalPages: clients.totalPages,
      // currentPage: clients.page - 1
    });
  } catch (error) {
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createComputer = async (req, res) => {
  let slug = req.body.name;
  slug.replace(/ /g, '-');

  const newComputer = new Computer({
    name: req.body.name,
    slug,
    specs: req.body.specs,
    price: req.body.price,
    brand: req.body.brand,
    image: req.body.image,
    description: req.body.description,
  });
  const computerCreated = await newComputer.save();
  res.json(computerCreated);
};

// export const findOneUser = async(req, res) =>{
//     const user = await User.findById(req.params.id);
//     res.json(user);
// }

export const deleteComputer = async (req, res) => {
  const computer = await Computer.findByIdAndDelete(req.params.id);
  res.json({
    message: 'Computer were deleted successfully',
  });
};

// AKIAVHJK4GQ6BBLS6M62
