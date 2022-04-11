const login = (req, res) => {
    res.send("<h1>Login Successful</h1>");
};

const register = (req, res) => {
    res.send("<h1>Registration Successful</h1>");
};

module.exports = {
    login,
    register,
}