module.exports = {
    
    adm_user: function (req, res, next) {
        if (req.isAuthenticated() && req.user.adm_user == 1){
            return next();
        }
       // req.flash('error', "Nao é adm");
        res.redirect('/');
    }


}