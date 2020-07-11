var middleware = {
    requireauthentication: function(request, response, next) {
        console.log("özel route girildi");
        next(); //istek gelir hakkimda yazarak next ile fonksiyona ilerlemesini sağlarız
    },
    logger: function(request, response, next) {
        console.log(request.method + "" + request.originalUrl);
        next();
    }
}
module.exports = middleware;