const {User} = require(`../models`);

class UserController {
    static loginPage(req, res) {
        res.send("Ini login page");
    }
    
    static async loginUser(req, res) {
        let reqUser = {
            email: req.body.email,
            password: req.body.password,
        };

        try {
            const auth = await User.findOne({ where: { email: reqUser.email , password: reqUser.password} });
            if(auth == null){
                res.send(`User with email ${reqUser.email} is not found or the password is incorect.`);
            }
            else {
                res.send(`Hi ${auth.full_name}, Welcome Back to BingleShop!`);
            }
        }
        catch(err) {
            res.send(err);
        }
    }

    static signupPage(req, res) {
        res.send("Ini signup page");
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
            res.send(`Hi ${newUser.full_name}, Welcome to BingleShop!`);
        }
        catch(err) {
            res.send(err);
        }
    }
}



module.exports = {UserController};