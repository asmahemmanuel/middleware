const authRequire = (req, res, next) => {
    const body = req.body;

    if (body.username !== "Asmah" || body.password !== "secret") {
       return res.send("<h1>Invalid credential</h1>");
    } 

    next();

};

module.exports = {
    authRequire,
};