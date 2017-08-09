var app = angular.module('conNature', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.conNature", {
        url : "/conNature",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/conNature/_res/html/index.html",
                controller:"conNatureCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/conNature/_res/html/menu.html",
                controller:"conNatureMenuCtrl"
            }
        }
    }).state("root.contract.conNature.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.conNature":{
                templateUrl : "root/contract/conNature/list/_res/html/index.html",
                controller:'conNatureListCtrl'
            }
        }
    }).state("root.contract.conNature.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.conNature":{
                templateUrl : "root/contract/conNature/add/_res/html/index.html",
                controller:'conNatureAddCtrl'
            }
        }
    }).state("root.contract.conNature.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.conNature":{
                templateUrl : "root/contract/conNature/edit/_res/html/index.html",
                controller:'conNatureEditCtrl'
            }
        }
    })
});