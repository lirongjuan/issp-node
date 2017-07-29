var app = angular.module('gradelevel', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.promoteManage.gradelevel", {
        url : "/gradelevel",
        views : {
            "content@root.promoteManage" : {
                templateUrl : "root/promoteManage/gradelevel/_res/html/index.html",
                controller:"gradelevelCtrl"
            },"menu@root.promoteManage" : {
                templateUrl : "root/promoteManage/gradelevel/_res/html/menu.html",
                controller:"gradelevelMenuCtrl"
            }
        }
    }).state("root.promoteManage.gradelevel.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.promoteManage.gradelevel":{
                templateUrl : "root/promoteManage/gradelevel/list/_res/html/index.html",
                controller:'gradelevelListCtrl'
            }
        }
    }).state("root.promoteManage.gradelevel.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.promoteManage.gradelevel":{
                templateUrl : "root/promoteManage/gradelevel/add/_res/html/index.html",
                controller:'gradelevelAddCtrl'
            }
        }
    }).state("root.promoteManage.gradelevel.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.promoteManage.gradelevel":{
                templateUrl : "root/promoteManage/gradelevel/edit/_res/html/index.html",
                controller:'gradelevelEditCtrl'
            }
        }
    })
});