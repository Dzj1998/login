let {src,dest,watch} = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

    function fnCopyIndex(){
        return src('./src/index.html').pipe(dest('./dist'));
    }
    function fnHTML(){
        return src('./src/html/**/*.html')
        .pipe(htmlmin())
        .pipe(dest('./dist/html'))
    }
    function fnCSS(){
        return src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(dest('./dist/css'));
    }
    function fnJS(){
        return src('./src/js/**/*.js')
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        // .pipe(concat('login.js'))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(dest('./dist/js'))
    }
    function fnlib(){
        return src('./src/lib/**/*')
        .pipe(dest('./dist/lib'))
    }
    function fnImg(){
        return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
    }
    function fnWatch(){
        watch('./src/index.html',fnCopyIndex)
        watch('./src/html/**/*.html',fnHTML)
        watch('./src/sass/**/*.scss',fnCSS)
        watch('./src/js/**/*.js',fnJS)
        watch('./src/img/**/*',fnImg)
        watch('./src/lib/**/*'),fnlib

    }

exports.copyindex = fnCopyIndex;
exports.html = fnHTML;
exports.img = fnImg;
exports.js = fnJS;
exports.css = fnCSS
exports.lib = fnlib;
exports.default = fnWatch
