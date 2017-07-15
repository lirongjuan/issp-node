var app = angular.module('basicinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.basicinfo", {
        url : "/basicinfo",
        views : {
            "content@root.supplier" : {
                templateUrl : "root/supplier/basicinfo/_res/html/index.html",
                controller:"basicinfoCtrl"
            },"menu@root.supplier" : {
                templateUrl : "root/supplier/basicinfo/_res/html/menu.html",
                controller:"basicinfoMenuCtrl"
            }
        }
    }).state("root.supplier.basicinfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    }).state("root.supplier.basicinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.supplier.basicinfo.details[12]",{
        url:"/details[12]?id=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/details/_res/html/index.html",
                controller:'detailsBasicCtrl'
            }
        }
    }).state("root.supplier.basicinfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/edit/_res/html/index.html",
                controller:'basicinfoEditCtrl'
            }
        }
    }).state("root.supplier.basicinfo.rewardAdd[12]",{
        url:"/rewardAdd[12]?id=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/rewardAdd/_res/html/index.html",
                controller:'rewardAddCtrl'
            }
        }
    }).state("root.supplier.basicinfo.qualifiAdd[12]",{
        url:"/qualifiAdd[12]?id=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/qualifiAdd/_res/html/index.html",
                controller:'qualifiAddCtrl'
            }
        }
    }).state("root.supplier.basicinfo.contactAdd[12]",{
        url:"/contactAdd[12]?id=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/contactAdd/_res/html/index.html",
                controller:'contactAddCtrl'
            }
        }
    }).state("root.supplier.basicinfo.cooperationAdd[12]",{
        url:"/cooperationAdd[12]?id=&page=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/cooperationAdd/_res/html/index.html",
                controller:'cooperationAddCtrl'
            }
        }
    })
});