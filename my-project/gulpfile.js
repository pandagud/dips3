// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass')
 
gulp.task('sass', function () {
    return gulp.src('public/sass/style.scss')
       .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'))
  
});
gulp.task('hello',function(){
    console.log('Hallo world');
})