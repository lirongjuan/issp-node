var app = angular.module('affair', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dealt.affair", {
        url : "/affair",
        views : {
            "content@root.dealt" : {
                templateUrl : "root/dealt/affair/_res/html/index.html",
                controller:"affairCtrl"
            },"menu@root.dealt" : {
                templateUrl : "root/dealt/affair/_res/html/menu.html",
                controller:"affairMenuCtrl"
            }
        }
    }).state("root.dealt.affair.list[12]",{
        url:"/list[12]?id=&name=&page=&time=&permissionses=&eventStatuses",
        views:{
            "content@root.dealt.affair":{
                templateUrl : "root/dealt/affair/list/_res/html/index.html",
                controller:'affairListCtrl'
            }
        }
    }).state("root.dealt.affair.select[12]",{
        url:"/select[12]",
        views:{
            "content@root.dealt.affair":{
                templateUrl : "root/dealt/affair/select/_res/html/index.html",
                controller:'affairSelectCtrl'
            }
        }
    })
});