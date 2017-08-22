var app = angular.module('setTime', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dealt.setTime", {
        url : "/setTime",
        views : {
            "content@root.dealt" : {
                templateUrl : "root/dealt/setTime/_res/html/index.html",
                controller:"setTimeCtrl"
            },"menu@root.dealt" : {
                templateUrl : "root/dealt/setTime/_res/html/menu.html",
                controller:"setTimeMenuCtrl"
            }
        }
    }).state("root.dealt.setTime.list[12]",{
        url:"/list[12]?name=&name2=&permissions=",
        views:{
            "content@root.dealt.setTime":{
                templateUrl : "root/dealt/setTime/list/_res/html/index.html",
                controller:'setTimeListCtrl'
            }
        }
    }).state("root.dealt.setTime.edit[12]",{
        url:"/edit[12]?name=&permissions=",
        views:{
            "content@root.dealt.setTime":{
                templateUrl : "root/dealt/setTime/edit/_res/html/index.html",
                controller:'setTimeEditCtrl'
            }
        }
    })
});