var app = angular.module('changeInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.changeInfo", {
        url : "/changeInfo",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/changeInfo/_res/html/index.html",
                controller:"changeInfoCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/changeInfo/_res/html/menu.html",
                controller:"changeInfoMenuCtrl"
            }
        }
    }).state("root.contract.changeInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.changeInfo":{
                templateUrl : "root/contract/changeInfo/list/_res/html/index.html",
                controller:'changeInfoListCtrl'
            }
        }
    }).state("root.contract.changeInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.changeInfo":{
                templateUrl : "root/contract/changeInfo/edit/_res/html/index.html",
                controller:'changeInfoEditCtrl'
            }
        }
    })
});