var app = angular.module('servereCord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.servereCord", {
        url : "/servereCord",
        views : {
            "content@root.marketActivity" : {
                templateUrl : "root/marketActivity/servereCord/_res/html/index.html",
                controller:"servereCordCtrl"
            },"menu@root.marketActivity" : {
                templateUrl : "root/marketActivity/servereCord/_res/html/menu.html",
                controller:"servereCordMenuCtrl"
            }
        }
    }).state("root.marketActivity.servereCord.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/list/_res/html/index.html",
                controller:'serverecordListCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/add/_res/html/index.html",
                controller:'serverecordAddCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.addcustomer[12]",{
        url:"/addcustomer[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/addcustomer/_res/html/index.html",
                controller:'servereCordAddcustomerCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.organize[12]",{
        url:"/organize[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/organize/_res/html/index.html",
                controller:'servereCordOrganizeCtr'
            }
        }
    }).state("root.marketActivity.servereCord.executiveOpinion[12]",{
        url:"/executiveOpinion[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/executiveOpinion/_res/html/index.html",
                controller:'servercordOpinionCtr'
            }
        }
    }).state("root.marketActivity.servereCord.see[12]",{
        url:"/see[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/see/_res/html/index.html",
                controller:'seeCtr'
            }
        }
    }).state("root.marketActivity.servereCord.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/upload/_res/html/index.html",
                controller:'uploadCtr'
            }
        }
    }).state("root.marketActivity.servereCord.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/view/_res/html/index.html",
                controller:'viewCtr'
            }
        }
    }).state("root.marketActivity.servereCord.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/export/_res/html/index.html",
                controller:'exportCtr'
            }
        }
    }).state("root.marketActivity.servereCord.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/import/_res/html/index.html",
                controller:'importCtr'
            }
        }
    })
});