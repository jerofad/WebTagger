/// <binding BeforeBuild='default' />
var gulp = require("gulp"),
    less = require("gulp-less"),
    cleanCSS = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    typescript = require("gulp-tsc");

gulp.task("move-libs",
    function() {
        gulp.src([
                "node_modules/angular2/bundles/js",
                "node_modules/angular2/bundles/angular2.*.js*",
                "node_modules/angular2/bundles/angular2-polyfills.js",
                "node_modules/angular2/bundles/http.*.js*",
                "node_modules/angular2/bundles/router.*.js*",
                "node_modules/es6-shim/es6-shim.min.js*",
                "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
                "node_modules/systemjs/dist/*.*",
                "node_modules/jquery/dist/jquery.*js",
                "node_modules/bootstrap/dist/js/bootstrap*.js",
                "node_modules/rxjs/bundles/Rx.js"
            ])
            .pipe(gulp.dest("./wwwroot/libs/js"));

        gulp.src([
                "node_modules/bootstrap/dist/css/bootstrap.css"
            ])
            .pipe(gulp.dest("./wwwroot/libs/css"));
    });

gulp.task("less",
    function() {
        return gulp.src(["./wwwroot/libs/css/*.less"])
            .pipe(less())
            .pipe(gulp.dest("./wwwroot/libs/css"));
    });
gulp.task("minify-css",
    ["less"],
    function() {
        return gulp.src([
                "./wwwroot/libs/css/bootstrap.css",
                "./wwwroot/libs/css/app.css"
            ])
            .pipe(cleanCSS({ compatibility: "ie8" }))
            .pipe(concat("app.min.css"))
            .pipe(gulp.dest("./wwwroot/libs/css/"));
    });

gulp.task("compile-typescript",
    function() {
        gulp.src(["./scripts/*.ts"])
            .pipe(typescript())
            .pipe(gulp.dest("./wwwroot/appScripts/"));
    });

gulp.task("default",
    ["minify-css", "move-libs"],
    function() {
        //gulp.watch("./wwwroot/libs/css/*.less", ["minify-css"]);
    });