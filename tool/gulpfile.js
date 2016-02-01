var articlefixer = require('./lib/articlefixer');
var gulp = require('gulp');



gulp.task('fix',function(){
    gulp.src('src/*.txt')
        .pipe(articlefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['fix']);
