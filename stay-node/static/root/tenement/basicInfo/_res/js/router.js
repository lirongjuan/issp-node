var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.tenement.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.tenement" : {
                templateUrl : "root/tenement/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.tenement" : {
                templateUrl : "root/tenement/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.tenement.basicInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.tenement.basicInfo":{
                templateUrl : "root/tenement/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.tenement.basicInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.tenement.basicInfo":{
                templateUrl : "root/tenement/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    }).state("root.tenement.basicInfo.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.tenement.basicInfo":{
                templateUrl : "root/tenement/basicInfo/collect/_res/html/index.html",
                controller:'basicInfoCollectCtrl'
            }
        }
    }).state("root.tenement.basicInfo.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.tenement.basicInfo":{
                templateUrl : "root/tenement/basicInfo/upload/_res/html/index.html",
                controller:'basicUploadCtrl'
            }
        }
    }).state("root.tenement.basicInfo.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.tenement.basicInfo":{
                templateUrl : "root/tenement/basicInfo/view/_res/html/index.html",
                controller:'basicViewCtrl'
            }
        }
    }).state("root.tenement.basicInfo.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.tenement.basicInfo":{
                templateUrl : "root/tenement/basicInfo/export/_res/html/index.html",
                controller:'basicExportCtrl'
            }
        }
    })
});