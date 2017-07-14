var app = angular.module('flow',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.flow", {
        url: "/flow",
        views: {
            "content@root": {
                templateUrl: "root/flow/_res/html/index.html",
                controller: "flowCtrl"
            },"nav@root":{
                templateUrl: "root/flow/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});