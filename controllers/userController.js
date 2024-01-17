function loginPage(req, res) {
    res.send("Ini login page");
}

function loginUser(req, res) {
    res.send("Ini Post Login!");
}


module.exports = {loginPage, loginUser};