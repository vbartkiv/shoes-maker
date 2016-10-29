module.exports = function (app) {
    var fs = require('fs');
    var path = require('path');

    app.get('/list', getList);

    function getList(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(readFile());
    }

    function readFile() {
        var filename = __dirname + '/../data.json';
        filename = path.normalize(filename);
        
        if (!fs.existsSync(filename)) {
            throw new Error('Unable to locate metadata');
        }

        var file =  fs.readFileSync(filename, 'utf8');
        return file;
    }
};