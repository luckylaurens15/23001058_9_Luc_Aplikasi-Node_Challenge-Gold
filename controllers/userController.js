const {User} = require(`../models`);
const { formatResponse } = require("../helpers/formatResponse");

class UserController {
    static loginPage(req, res) {
        res.status(200).json(formatResponse(null, "This is login page."));
    }
    
    static async loginUser(req, res) {
        let reqUser = {
            email: req.body.email,
            password: req.body.password,
        };

        try {
            const auth = await User.findOne({ where: { email: reqUser.email , password: reqUser.password} });
            if(auth == null){
                res.status(401).json(formatResponse(reqUser.email, `User with email ${reqUser.email} is not found or the password is incorect.`));
            }
            else {
                res.status(200).json(formatResponse(auth, `Hi ${auth.full_name}, Welcome Back to BingleShop!`));
            }
        }
        catch(err) {
            res.status(400).json(formatResponse(req.body, 'Failed to Authenticate due to Bad Request'));
        }
    }

    static signupPage(req, res) {
        res.status(200).json(formatResponse(null, "This is signup page."));
    }

    static async signupUser(req, res) {
        try {
            const newUser = await User.create({
                full_name: req.body.full_name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                date_of_birth: req.body.dob,
                password: req.body.password,
            });
            res.status(200).json(formatResponse(newUser, `Hi ${newUser.full_name}, Welcome to BingleShop!`));
        }
        catch(err) {
            res.status(400).json(formatResponse(req.body, err));
        }
    }

    static async editUserPage(req, res) {
        const theUser = await User.findByPk(req.params.id);
        res.status(200).json(formatResponse(theUser, `Edit user ${theUser.full_name} (id: ${theUser.id}) page.`));
    }

    static async editUser(req, res) {
        try {
            const theUser = await User.findByPk(req.params.id);
            if (theUser == null){
                res.status(400).json(formatResponse(req.params, `Cannot find any user with id ${req.params.id}`));
            }
            else{
                if (req.body.full_name != null){
                    theUser.full_name = req.body.full_name;
                }
                if (req.body.email != null){
                    theUser.email = req.body.email;
                }
                if (req.body.phone_number != null){
                    theUser.phone_number = req.body.phone_number;
                }
                if (req.body.date_of_birth != null){
                    theUser.date_of_birth = req.body.date_of_birth;
                }
                if (req.body.password != null){
                    theUser.password = req.body.password;
                }
                theUser.updatedAt = new Date();
                theUser.save();
                res.status(200).json(formatResponse(theUser, `Successfully Updated User ${theUser.full_name} with id ${theUser.id}!`));
            }
        }
        catch(err) {
            res.status(400).json(formatResponse(req.body, err));
        }
    }
}



module.exports = {UserController};