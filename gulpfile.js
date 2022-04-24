const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass')(require('sass'));
const hash = require("gulp-hash");
const child = require('child_process');
const hugo = child.spawn('hugo', ['serve', '--bind=0.0.0.0']);
const browserSync = require('browser-sync').create();

gulp.task('hugo', () => {
    const hugo = child.spawn('hugo', ['serve']);
  
    const hugoLogger = (buffer) => {
      buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log('Hugo: ' + message))
    };
  
    hugo.stdout.on('data', hugoLogger);
    hugo.stderr.on('data', hugoLogger);
  });

//compile scss into css
gulp.task("scss-main", async function () {
    gulp.src("src/scss/main.scss")
        .pipe(sass().on('error',sass.logError))
        .pipe(hash())
        .pipe(gulp.dest('static/_assets/css'))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/css"));
});

gulp.task("scss-main-addon", async function () {
    gulp.src('src/scss/main-addon.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(hash())
        .pipe(gulp.dest('static/_assets/css'))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/css"));
});

gulp.task("scss-font", async function () {
    gulp.src('src/scss/components/font.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(hash())
        .pipe(gulp.dest('static/_assets/css'))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/css"));
});

gulp.task("scss-bg", async function () {
    gulp.src('src/scss/components/bg.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(hash())
        .pipe(gulp.dest('static/_assets/css'))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/css"));
});

gulp.task("scss-icon", async function () {
    gulp.src('src/scss/components/icon.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(hash())
        .pipe(gulp.dest('static/_assets/css'))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/css"));
});

gulp.task("js", async function () {
    //del(["static/_assets/js/www/**/*"])
    gulp.src(["src/js/**/*", "node_modules/bootstrap/dist/js/bootstrap.min.js"])
        .pipe(hash())
        .pipe(gulp.dest("static/_assets/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/js"))
});

// Watch asset folder for changes
gulp.task("watch", gulp.series("js","scss-main","scss-main-addon","scss-font","scss-bg","scss-icon"), async function () {
    gulp.watch("src/scss/**/*", ["scss-main"])
    gulp.watch("src/js/**/*", ["js"])
});

gulp.task('start', gulp.series('hugo', 'watch'));