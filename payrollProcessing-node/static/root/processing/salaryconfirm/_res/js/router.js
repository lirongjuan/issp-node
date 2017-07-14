var app = angular.module('salaryconfirm', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.salaryconfirm", {
        url : "/salaryconfirm",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/salaryconfirm/_res/html/index.html",
                controller:"salaryconfirmCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/salaryconfirm/_res/html/menu.html",
                controller:"salaryconfirmMenuCtrl"
            }
        }
    }).state("root.processing.salaryconfirm.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/list/_res/html/index.html",
                controller:'salaryconfirmListCtrl'
            }
        }
    }).state("root.processing.salaryconfirm.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/add/_res/html/index.html",
                controller:'salaryconfirmAddCtrl'
            }
        }
    }).state("root.processing.salaryconfirm.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/edit/_res/html/index.html",
                controller:'salaryconfirmEditCtrl'
            }
        }
    }).state("root.processing.salaryconfirm.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/upload/_res/html/index.html",
                controller:'salaryconfirmUploadCtrl'
            }
        }
    }).state("root.processing.salaryconfirm.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/view/_res/html/index.html",
                controller:'salaryconfirmViewCtrl'
            }
        }
    }).state("root.processing.salaryconfirm.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/import/_res/html/index.html",
                controller:'salaryconfirmImportCtrl'
            }
        }
    }).state("root.processing.salaryconfirm.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.processing.salaryconfirm":{
                templateUrl : "root/processing/salaryconfirm/export/_res/html/index.html",
                controller:'salaryconfirmExportCtrl'
            }
        }
    })
});