function adminMiddleware(req,res,next){

    if(req.session.user && req.session.user.role === "admin"){
        return next();
    }

    return res.redirect("/");
}

module.exports = adminMiddleware;