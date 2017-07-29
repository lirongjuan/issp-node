var app = angular.module('design', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.promoteManage.design", {
        url : "/design",
        views : {
            "content@root.promoteManage" : {
                templateUrl : "root/promoteManage/design/_res/html/index.html",
                controller:"designCtrl"
            },"menu@root.promoteManage" : {
                templateUrl : "root/promoteManage/design/_res/html/menu.html",
                controller:"designMenuCtrl"
            }
        }
    }).state("root.promoteManage.design.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.promoteManage.design":{
                templateUrl : "root/promoteManage/design/list/_res/html/index.html",
                controller:'designListCtrl'
            }
        }
    }).state("root.promoteManage.design.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.promoteManage.design":{
                templateUrl : "root/promoteManage/design/add/_res/html/index.html",
                controller:'designAddCtrl'
            }
        }
    }).state("root.promoteManage.design.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.promoteManage.design":{
                templateUrl : "root/promoteManage/design/edit/_res/html/index.html",
                controller:'designEditCtrl'
            }
        }
    })
});