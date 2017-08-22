var app = angular.module('allevent', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dealt.allevent", {
        url : "/allevent",
        views : {
            "content@root.dealt" : {
                templateUrl : "root/dealt/allevent/_res/html/index.html",
                controller:"alleventCtrl"
            },"menu@root.dealt" : {
                templateUrl : "root/dealt/allevent/_res/html/menu.html",
                controller:"alleventMenuCtrl"
            }
        }
    }).state("root.dealt.allevent.list[12]",{
        url:"/list[12]?id=&name=&page=&time=&permissionses=&eventStatuses",
        views:{
            "content@root.dealt.allevent":{
                templateUrl : "root/dealt/allevent/list/_res/html/index.html",
                controller:'alleventListCtrl'
            }
        }
    }).state("root.dealt.allevent.eventCollect[12]",{
        url:"/eventCollect[12]",
        views:{
            "content@root.dealt.allevent":{
                templateUrl : "root/dealt/allevent/eventCollect/_res/html/index.html",
                controller:'eventCollectCtrl'
            }
        }
    }).state("root.dealt.allevent.handled[12]",{
        url:"/handled[12]",
        views:{
            "content@root.dealt.allevent":{
                templateUrl : "root/dealt/allevent/handled/_res/html/index.html",
                controller:'handledCtrl'
            }
        }
    }).state("root.dealt.allevent.untreated[12]",{
        url:"/untreated[12]",
        views:{
            "content@root.dealt.allevent":{
                templateUrl : "root/dealt/allevent/untreated/_res/html/index.html",
                controller:'untreatedCtrl'
            }
        }
    }).state("root.dealt.allevent.overdue[12]",{
        url:"/overdue[12]",
        views:{
            "content@root.dealt.allevent":{
                templateUrl : "root/dealt/allevent/overdue/_res/html/index.html",
                controller:'overdueCtrl'
            }
        }
    }).state("root.dealt.allevent.classify[12]",{
        url:"/classify[12]",
        views:{
            "content@root.dealt.allevent":{
                templateUrl : "root/dealt/allevent/classify/_res/html/index.html",
                controller:'classifyCtrl'
            }
        }
    })
});