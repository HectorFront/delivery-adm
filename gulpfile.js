const { src, dest, series } = require('gulp');

const svgMin = require('gulp-svgmin');
const imageMin = require('gulp-imagemin');
const cleanCss = require('gulp-clean-css');
const htmlClean = require('gulp-htmlmin');

exports.image_assets = () => {
    return src('src/assets/**/*')
        .pipe(imageMin())
        .pipe(dest('src/assets'));
};

const image_build = () => {
    return src('build/**/*')
        .pipe(imageMin())
        .pipe(dest('build'));
};

const svg_build = () => {
    return src('build/**/*.svg')
        .pipe(svgMin())
        .pipe(dest('build'));
}

const clean_css = () => {
    return src('build/**/*.css')
        .pipe(cleanCss())
        .pipe(dest('build'));
};

const clean_html = () => {
    return src('build/**/*.html')
        .pipe(htmlClean())
        .pipe(dest('build'));
};

exports.build = series(svg_build, image_build, clean_css, clean_html);