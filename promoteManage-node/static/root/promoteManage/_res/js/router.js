var app = angular.module('contractModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.promoteManage", {
        url: "/promoteManage",
        views: {
            "content@root": {
                templateUrl: "root/promoteManage/_res/html/index.html",
                controller: "busContractCtrl"
            },"nav@root":{
                templateUrl: "root/promoteManage/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});