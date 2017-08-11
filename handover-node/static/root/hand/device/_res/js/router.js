var app = angular.module('device', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.device", {
        url : "/device",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/device/_res/html/index.html",
                controller:"deviceCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/device/_res/html/menu.html",
                controller:"deviceMenuCtrl"
            }
        }
    }).state("root.hand.device.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.hand.device":{
                templateUrl : "root/hand/device/list/_res/html/index.html",
                controller:'deviceListCtrl'
            }
        }
    }).state("root.hand.device.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.hand.device":{
                templateUrl : "root/hand/device/add/_res/html/index.html",
                controller:'deviceAddCtrl'
            }
        }
    }).state("root.hand.device.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.device":{
                templateUrl : "root/hand/device/edit/_res/html/index.html",
                controller:'deviceEditCtrl'
            }
        }
    }).state("root.hand.device.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.hand.device":{
                templateUrl : "root/hand/device/upload/_res/html/index.html",
                controller:'deviceUploadCtrl'
            }
        }
    }).state("root.hand.device.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.hand.device":{
                templateUrl : "root/hand/device/view/_res/html/index.html",
                controller:'deviceViewCtrl'
            }
        }
    })
});