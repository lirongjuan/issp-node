var app = angular.module('file',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.file", {
        url: "/file",
        views: {
            "content@root": {
                templateUrl: "root/file/_res/html/index.html",
                controller: "fileCtrl"
            },"nav@root": {
                templateUrl: "root/file/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})