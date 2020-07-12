var express = require('express');
var middleware = require('./middleware');
var app = express();
var port = process.env.PORT || 2000;

// app.get('/', (request, response) => {
//     response.send("merhaba");
// }) artık direk app.use ile kullandığımız sayfa karşımıza çıkacak
//app.use(middleware.requireauthentication); buraya girersek her sayfa içni söyler
app.get("/hakkimda", middleware.logger, middleware.requireauthentication, (request, response) => {
        response.send("hakkımda sekmesi");
    }) //bunlar routedir
app.get("/blog", middleware.logger, (request, response) => {
    response.send("blog sayfasındayım");
})
app.use(express.static(__dirname + "/public"))
    //console.log(__dirname); //dosya yolunu belirtir
app.listen(port, () => {
    console.log("bağlantı başarılı port :" + port);
});