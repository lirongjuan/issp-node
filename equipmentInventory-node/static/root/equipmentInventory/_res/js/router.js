var app = angular.module('inventoryModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.equipmentInventory", {
        url: "/equipmentInventory",
        views: {
            "content@root": {
                templateUrl: "root/equipmentInventory/_res/html/index.html",
                controller: "equipmentCtrl"
            },"nav@root":{
                templateUrl: "root/equipmentInventory/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});
