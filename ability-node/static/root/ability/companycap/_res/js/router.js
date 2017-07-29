var app = angular.module('companycap', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.companycap", {
        url : "/companycap",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/companycap/_res/html/index.html",
                controller:"companycapCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/companycap/_res/html/menu.html",
                controller:"companycapMenuCtrl"
            }
        }
    }).state("root.ability.companycap.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/add/_res/html/index.html",
                controller:'companyAddCtrl'
            }
        }
    }).state("root.ability.companycap.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.ability.companycap.list[12]",{
        url:"/list[12]?id=&name=&page=&company=",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/list/_res/html/index.html",
                controller:'companycapListCtrl'
            }
        }
    }).state("root.ability.companycap.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/import/_res/html/index.html",
                controller:'companyImportCtrl'
            }
        }
    }).state("root.ability.companycap.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/export/_res/html/index.html",
                controller:'companyExportCtrl'
            }
        }
    }).state("root.ability.companycap.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/upload/_res/html/index.html",
                controller:'companyUploadCtrl'
            }
        }
    }).state("root.ability.companycap.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/view/_res/html/index.html",
                controller:'companyViewCtrl'
            }
        }
    })
});