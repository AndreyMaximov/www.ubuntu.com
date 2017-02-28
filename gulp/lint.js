var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var exec = require('child_process').exec;

gulp.task('lint:sass', function() {
  return gulp.src('static/css/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('lint:spellcheck', function(cb) {
  return exec('node_modules/markdown-spellcheck/bin/mdspell docs/**/*.md -r -n -a --en-gb', function (err, stdout, stderr) {
    console.log(stdout);
    cb(err);
  });
});
