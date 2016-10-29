module.exports = function (app) {
    var fs = require('fs');
    var path = require('path');

    app.get('/list', getList);
    app.get('/appcache', getCacheManifestFile);

    ////////////////////////////////////////

    function getList(req, res) {
        res.setHeader('Content-Type', 'application/json');
        var pathToFile = __dirname + '/../data.json';
        res.send(readFile(pathToFile));
    }

    function getCacheManifestFile(req, res) {
        res.setHeader('Content-Type', 'text/cache-manifest');
        var pathToFile = __dirname + '/../shoes-maker.appcache';
        res.send(readFile(pathToFile));
    }

    function readFile(filename) {
        filename = path.normalize(filename);
        
        if (!fs.existsSync(filename)) {
            throw new Error('Unable to locate metadata:' + filename);
        }

        var file =  fs.readFileSync(filename, 'utf8');
        return file;
    }
};