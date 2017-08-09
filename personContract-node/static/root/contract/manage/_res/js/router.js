var app = angular.module('manage', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.manage", {
        url : "/manage",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/manage/_res/html/index.html",
                controller:"manageCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/manage/_res/html/menu.html",
                controller:"manageMenuCtrl"
            }
        }
    }).state("root.contract.manage.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/list/_res/html/index.html",
                controller:'manageListCtrl'
            }
        }
    }).state("root.contract.manage.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/add/_res/html/index.html",
                controller:'manageAddCtrl'
            }
        }
    }).state("root.contract.manage.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/edit/_res/html/index.html",
                controller:'manageEditCtrl'
            }
        }
    }).state("root.contract.manage.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/upload/_res/html/index.html",
                controller:'manageUploadCtrl'
            }
        }
    }).state("root.contract.manage.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/view/_res/html/index.html",
                controller:'manageViewCtrl'
            }
        }
    }).state("root.contract.manage.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/detail/_res/html/index.html",
                controller:'managedetailCtrl'
            }
        }
    }).state("root.contract.manage.changing[12]",{
        url:"/changing[12]?id=&page=",
        views:{
            "content@root.contract.manage":{
                templateUrl : "root/contract/manage/changing/_res/html/index.html",
                controller:'manageChangingCtrl'
            }
        }
    })
});