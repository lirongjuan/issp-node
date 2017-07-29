var app = angular.module('materialModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.materialBuy", {
        url: "/materialBuy",
        views: {
            "content@root": {
                templateUrl: "root/materialBuy/_res/html/index.html",
                controller: "materialCtrl"
            },"nav@root":{
                templateUrl: "root/materialBuy/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});
