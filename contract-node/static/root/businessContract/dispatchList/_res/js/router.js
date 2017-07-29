var app = angular.module('dispatchList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.dispatchList", {
        url : "/dispatchList",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/dispatchList/_res/html/index.html",
                controller:"dispatchListCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/dispatchList/_res/html/menu.html",
                controller:"dispatchMenuCtrl"
            }
        }
    }).state("root.businessContract.dispatchList.list[12]",{
        url:"/list[12]?id=&name=&page=&inner=&outNum=&saleNum=&businessType=&subject=&cooperate=&major=&sub=&area=&dispatchProject=&dispatchNum=",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/list/_res/html/index.html",
                controller:'dispatchWorkCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/add/_res/html/index.html",
                controller:'dispatchAddCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/edit/_res/html/index.html",
                controller:'dispatchEditCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/upload/_res/html/index.html",
                controller:'dispatchUploadCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/view/_res/html/index.html",
                controller:'dispatchViewCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/export/_res/html/index.html",
                controller:'dispatchExportCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/import/_res/html/index.html",
                controller:'dispatchImportCtrl'
            }
        }
    })
});