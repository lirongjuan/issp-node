var app = angular.module('rotat',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.rotation", {
        url: "/rotation",
        views: {
            "content@root": {
                templateUrl: "root/rotation/_res/html/index.html",
                controller: "rotatCtrl"
            },"nav@root":{
                templateUrl: "root/rotation/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});