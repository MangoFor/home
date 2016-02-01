var path           = require('path');
var accord         = require('accord');
var through2       = require('through2');
var gutil          = require('gulp-util');
var assign         = require('object-assign');
var applySourceMap = require('vinyl-sourcemaps-apply');
var Promise        = require('promise');
var PluginError    = gutil.PluginError;

module.exports = function (options) {
    // Mixes in default options.
    opts = options||{};

    return through2.obj(function(file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new PluginError('gulp-articlefixer', 'Streaming not supported'));
        }

        var str = file.contents.toString();

        // Injects the path of the current file
        opts.filename = file.path;

        // Bootstrap source maps
        if (file.sourceMap) {
            opts.sourcemap = true;
        }
        articlefixer(str).then(function(res){
            file.contents = new Buffer(res,'utf8');
            file.path = gutil.replaceExtension(file.path, '.html');

            if (res.sourcemap) {
                res.sourcemap.file = file.relative;
                res.sourcemap.sources = res.sourcemap.sources.map(function (source) {
                    return path.relative(file.base, source);
                });

                applySourceMap(file, res.sourcemap);
            }
            return file;
        }).then(function(file){

            cb(null,file);
        }).catch(function(err){
            // Convert the keys so PluginError can read them
            err.lineNumber = err.line;
            err.fileName = err.filename;

            // Add a better error message
            err.message = err.message + ' in file ' + err.fileName + ' line no. ' + err.lineNumber;
            console.log(err);
            return cb(new PluginError('gulp-articlefixer', err));
        })
    });
};
function articlefixer(str){
    return new Promise(function(resolve, reject){

        var s = "";
        if(str.length == 0) return "";
        //s = str.replace(/&/g,"&amp;");
        //s = s.replace(/</g,"&lt;");
        //s = s.replace(/>/g,"&gt;");
        //s = s.replace(/ /g,"&nbsp;");
        //s = s.replace(/\'/g,"&#39;");
        //s = s.replace(/\"/g,"&quot;");
        s = str.replace(/\r\n/g,"\\n\r\n");
        //s = s.replace(/{/g,"{'{'");
        //s = s.replace(/}/g,"{'}'}");
        //s = s.replace(/{'{'/g,"{'{'}");

        resolve(s);
    });
}
