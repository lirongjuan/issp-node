var app = angular.module('other', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.other", {
        url : "/other",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/other/_res/html/index.html",
                controller:"otherCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/other/_res/html/menu.html",
                controller:"otherMenuCtrl"
            }
        }
    }).state("root.addressList.other.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.other":{
                templateUrl : "root/addressList/other/list/_res/html/index.html",
                controller:'otherListCtrl'
            }
        }
    }).state("root.addressList.other.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.other":{
                templateUrl : "root/addressList/other/add/_res/html/index.html",
                controller:'otherAddCtrl'
            }
        }
    }).state("root.addressList.other.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.other":{
                templateUrl : "root/addressList/other/edit/_res/html/index.html",
                controller:'otherEditCtrl'
            }
        }
    }).state("root.addressList.other.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.addressList.other":{
                templateUrl : "root/addressList/other/import/_res/html/index.html",
                controller:'otherImportCtrl'
            }
        }
    })
});