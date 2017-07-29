var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/basicInfo/_res/html/menu.html",
                controller:"basicMenuCtrl"
            }
        }
    }).state("root.businessContract.basicInfo.list[12]",{
        url:"/list[12]?id=&name=&page=&inner=&outNum=&saleNum=&type=&subject=&cooperate=&first=&second=&area=&property=&payWays=&customerName=&siginYear=&fileCondition=",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/list/_res/html/index.html",
                controller:'basicListCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/add/_res/html/index.html",
                controller:'basicAddCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/edit/_res/html/index.html",
                controller:'basicEditCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/upload/_res/html/index.html",
                controller:'basicUploadCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/view/_res/html/index.html",
                controller:'basicViewCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/export/_res/html/index.html",
                controller:'basicExportCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/import/_res/html/index.html",
                controller:'basicImportCtrl'
            }
        }
    })
});