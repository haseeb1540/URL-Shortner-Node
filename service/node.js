module.exports = function(app) {
        var shortUrl = require('node-url-shortener');
    
        app.post('/node', function(req, res) {
            req.on('data', function(chunk) {
            var array=[];
                var  initialUrl = JSON.parse(chunk.toString()).data;

                    shortUrl.short(initialUrl, function(err, url){
                        array[0]=url
                        array[1]=initialUrl
                        array[2] = new Date();
                    res.json({ "result": array });
                    });
                    
            });
        });

}
