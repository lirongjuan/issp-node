var app = angular.module('record', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.finance.usecar.record", {
        url : "/record",
        views : {
            "content@root.finance.usecar" : {
                templateUrl : "root/finance/usecar/record/_res/html/index.html",
                controller:"recordCtrl"
            },"menu@root.finance.usecar" : {
                templateUrl : "root/finance/usecar/record/_res/html/menu.html",
                controller:"recordMenuCtrl"
            }
        }
    }).state("root.finance.usecar.record.list[12]", {
        url : "/list[12]?id=&name=&page=",
        views : {
            "content@root.finance.usecar.record" : {
                templateUrl : "root/finance/usecar/record/list/_res/html/index.html",
                controller:"recordListCtrl"
            }
        }
    }).state("root.finance.usecar.record.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.finance.usecar.record" : {
                templateUrl : "root/finance/usecar/record/add/_res/html/index.html",
                controller:"recordAddCtrl"
            }
        }
    }).state("root.finance.usecar.record.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.finance.usecar.record":{
                templateUrl : "root/finance/usecar/record/edit/_res/html/index.html",
                controller:'angleEditCtrl'
            }
        }
    })
});

