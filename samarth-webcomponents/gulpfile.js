const gulp = require('gulp');
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');
const htmlhint = require('gulp-htmlhint');

gulp.task('lint', ['eslint', 'htmlhint']);
gulp.task('lint-fix', ['eslint-fix']);

function isFixed(file) {
    // Has ESLint fixed the file contents?
    return file.eslint != null && file.eslint.fixed;
}

function getSrc() {
    return ['jobcard/**/*',
        'circle/**/*',
        'rubric/**/*',
        'questionbox/**/*',
        'sectioneducationcard/**/*',
        'sectionpersonalinfocard/**/*',
        'sectionprojectcard/**/*',
        'sectionskillcard/**/*',
        'sectionworkexperiancecard/**/*',
        'skillcard/**/*',
        'verificationbadge/**/*',
        'samarth-webcomponents.js',
        'gulpfile.js',
        '!node_modules/**/*'
    ];
}

gulp.task('eslint', function() {
    return gulp.src(getSrc())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('eslint-fix', function() {
    return gulp.src(getSrc())
        .pipe(eslint({
            fix: true
        }))
        .pipe(gulpIf(isFixed, gulp.dest('lintfixes/')))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('htmlhint', function() {
    return gulp.src(['**/*.html', '!node_modules/**/*'])
        .pipe(htmlhint({
            htmlhintrc: '.htmlhintrc'
        }))
        .pipe(htmlhint.failReporter());
});
