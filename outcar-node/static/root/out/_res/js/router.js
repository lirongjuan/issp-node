var app = angular.module('out',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.out", {
        url: "/out",
        views: {
            "content@root": {
                templateUrl: "root/out/_res/html/index.html",
                controller: "outCtrl"
            },"nav@root": {
                templateUrl: "root/out/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})