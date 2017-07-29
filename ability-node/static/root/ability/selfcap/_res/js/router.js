var app = angular.module('selfcap', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.selfcap", {
        url : "/selfcap",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/selfcap/_res/html/index.html",
                controller:"selfcapCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/selfcap/_res/html/menu.html",
                controller:"selfcapMenuCtrl"
            }
        }
    }).state("root.ability.selfcap.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/add/_res/html/index.html",
                controller:'selfcapAddCtrl'
            }
        }
    }).state("root.ability.selfcap.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/edit/_res/html/index.html",
                controller:'selfcapEditCtrl'
            }
        }
    }).state("root.ability.selfcap.social[12]",{
        url:"/social[12]?id=&page=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/social/_res/html/index.html",
                controller:'socialPAddCtrl'
            }
        }
    }).state("root.ability.selfcap.list[12]",{
        url:"/list[12]?id=&name=&page=&names=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/list/_res/html/index.html",
                controller:'selfcapListCtrl'
            }
        }
    }).state("root.ability.selfcap.socialList[12]",{
        url:"/socialList[12]?id=&subId=&name=&page=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/socialList/_res/html/index.html",
                controller:'socialListBasicCtrl'
            }
        }
    }).state("root.ability.selfcap.socialEdit[12]",{
        url:"/socialEdit[12]?id=&subId=&page=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/socialEdit/_res/html/index.html",
                controller:'socialPEditCtrl'
            }
        }
    })
});