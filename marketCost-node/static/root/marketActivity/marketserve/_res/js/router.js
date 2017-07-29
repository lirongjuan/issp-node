var app = angular.module('marketserve', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.marketserve", {
        url : "/marketserve",
        views : {// marketActivity  
            "content@root.marketActivity" : {
                templateUrl : "root/marketActivity/marketserve/_res/html/index.html",
                controller:"marketserveCtrl"
            },"menu@root.marketActivity" : {
                templateUrl : "root/marketActivity/marketserve/_res/html/menu.html",
                controller:"marketserveMenuCtrl"
            }
        }
    }).state("root.marketActivity.marketserve.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/list/_res/html/index.html",
                controller:'marketserveListCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/add/_res/html/index.html",
                controller:'marketserveAddCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.addcustomer[12]",{
        url:"/addcustomer[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/addcustomer/_res/html/index.html",
                controller:'marketserveAddcustomerCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.organize[12]",{
        url:"/organize[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/organize/_res/html/index.html",
                controller:'marketserveOrganizeCtr'
            }
        }
    }).state("root.marketActivity.marketserve.executiveOpinion[12]",{
        url:"/executiveOpinion[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/executiveOpinion/_res/html/index.html",
                controller:'mExecutiveOpinionCtr'
            }
        }
    }).state("root.marketActivity.marketserve.see[12]",{
        url:"/see[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/see/_res/html/index.html",
                controller:'mviewCtr'
            }
        }
    }).state("root.marketActivity.marketserve.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/upload/_res/html/index.html",
                controller:'uploadCtr'
            }
        }
    }).state("root.marketActivity.marketserve.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/view/_res/html/index.html",
                controller:'viewCtr'
            }
        }
    }).state("root.marketActivity.marketserve.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/export/_res/html/index.html",
                controller:'exportCtr'
            }
        }
    }).state("root.marketActivity.marketserve.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/import/_res/html/index.html",
                controller:'importCtr'
            }
        }
    })
});