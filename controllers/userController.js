const {User} = require(`../models`);
const { formatResponse } = require("../helpers/formatResponse");

class UserController {
    static loginPage(req, res) {
        res.status(200).json(formatResponse(null, "Ini login page"));
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
        res.status(200).json(formatResponse(null, "Ini signup page"));
    }

    static async signupUser(req, res) {
        try {
            const newUser = await User.create({
                full_name: req.body.fullName,
                email: req.body.email,
                phone_number: req.body.phoneNumber,
                date_of_birth: req.body.dob,
                password: req.body.password,
            });
            res.status(200).json(formatResponse(newUser, `Hi ${newUser.full_name}, Welcome to BingleShop!`));
        }
        catch(err) {
            res.status(400).json(formatResponse(req.body, err));
        }
    }
}



module.exports = {UserController};