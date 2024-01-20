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
    
        const auth = await User.findOne({ where: { email: reqUser.email , password: reqUser.password} });
        
        if(auth == null){
            res.send(`User with email ${reqUser.email} is not found or the password is incorect.`);
        }
        else {
            res.send(`Hi ${auth.full_name}, Welcome to BingleShop!`);
        }
    }
}



module.exports = {UserController};