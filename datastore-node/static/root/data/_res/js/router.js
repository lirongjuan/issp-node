var app = angular.module('data',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.data", {
        url: "/data",
        views: {
            "content@root": {
                templateUrl: "root/data/_res/html/index.html",
                controller: "dataCtrl"
            },"nav@root": {
                templateUrl: "root/data/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})