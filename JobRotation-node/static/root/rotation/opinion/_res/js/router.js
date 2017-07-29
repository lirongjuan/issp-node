var app = angular.module('opinion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.opinion", {
        url : "/opinion",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/opinion/_res/html/index.html",
                controller:"statiCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/opinion/_res/html/menu.html",
                controller:"statiMenuCtrl"
            }
        }
    }).state("root.rotation.opinion.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/list/_res/html/index.html",
                controller:'statiListCtrl'
            }
        }
    })
});