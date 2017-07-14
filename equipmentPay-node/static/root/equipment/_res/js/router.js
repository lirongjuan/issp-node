var app = angular.module('equipment',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.equipment", {
        url: "/equipment",
        views: {
            "content@root": {
                templateUrl: "root/equipment/_res/html/index.html",
                controller: "equipmentCtrl"
            },"nav@root":{
                templateUrl: "root/equipment/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});