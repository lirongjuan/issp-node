var app = angular.module('cover', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.cover", {
        url : "/cover",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/cover/_res/html/index.html",
                controller:"coverCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/cover/_res/html/menu.html",
                controller:"coverMenuCtrl"
            }
        }
    }).state("root.rotation.cover.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.cover":{
                templateUrl : "root/rotation/cover/list/_res/html/index.html",
                controller:'coverListCtrl'
            }
        }
    }).state("root.rotation.cover.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.rotation.cover":{
                templateUrl : "root/rotation/cover/add/_res/html/index.html",
                controller:'coverAddCtrl'
            }
        }
    }).state("root.rotation.cover.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.cover":{
                templateUrl : "root/rotation/cover/edit/_res/html/index.html",
                controller:'coverEditCtrl'
            }
        }
    }).state("root.rotation.cover.ideaZ[12]",{
        url:"/ideaZ[12]?id=&page=",
        views:{
            "content@root.rotation.cover":{
                templateUrl : "root/rotation/cover/ideaZ/_res/html/index.html",
                controller:'coverIdeaZCtrl'
            }
        }
    }).state("root.rotation.cover.idea[12]",{
        url:"/idea[12]?id=&page=",
        views:{
            "content@root.rotation.cover":{
                templateUrl : "root/rotation/cover/idea/_res/html/index.html",
                controller:'coverIdeaCtrl'
            }
        }
    })
});