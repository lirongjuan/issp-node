var app = angular.module('contractModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.costDetail", {
        url: "/costDetail",
        views: {
            "content@root": {
                templateUrl: "root/costDetail/_res/html/index.html",
                controller: "busContractCtrl"
            },"nav@root":{
                templateUrl: "root/costDetail/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});