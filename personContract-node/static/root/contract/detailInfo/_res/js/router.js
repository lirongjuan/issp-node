var app = angular.module('detailInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.detailInfo", {
        url : "/detailInfo",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/detailInfo/_res/html/index.html",
                controller:"detailInfoCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/detailInfo/_res/html/menu.html",
                controller:"detailInfoMenuCtrl"
            }
        }
    }).state("root.contract.detailInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.detailInfo":{
                templateUrl : "root/contract/detailInfo/list/_res/html/index.html",
                controller:'detailInfoListCtrl'
            }
        }
    }).state("root.contract.detailInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.detailInfo":{
                templateUrl : "root/contract/detailInfo/edit/_res/html/index.html",
                controller:'detailInfoEditCtrl'
            }
        }
    })
});