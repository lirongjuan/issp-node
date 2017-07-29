var app = angular.module('liabilities', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.liabilities", {
        url : "/liabilities",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/liabilities/_res/html/index.html",
                controller:"liabilitiesCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/liabilities/_res/html/menu.html",
                controller:"liabilitiesMenuCtrl"
            }
        }
    }).state("root.initialize.sort.liabilities.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.sort.liabilities":{
                templateUrl : "root/initialize/sort/liabilities/list/_res/html/index.html",
                controller:'liabilitiesListCtrl'
            }
        }
    }).state("root.initialize.sort.liabilities.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.liabilities":{
                templateUrl : "root/initialize/sort/liabilities/add/_res/html/index.html",
                controller:'liabilitiesAddCtrl'
            }
        }
    }).state("root.initialize.sort.liabilities.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.initialize.sort.liabilities":{
                templateUrl : "root/initialize/sort/liabilities/edit/_res/html/index.html",
                controller:'liabilitiesEditCtrl'
            }
        }
    })
});