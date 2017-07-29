var app = angular.module('apply', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.promoteManage.apply", {
        url : "/apply",
        views : {
            "content@root.promoteManage" : {
                templateUrl : "root/promoteManage/apply/_res/html/index.html",
                controller:"applyCtrl"
            },"menu@root.promoteManage" : {
                templateUrl : "root/promoteManage/apply/_res/html/menu.html",
                controller:"applyMenuCtrl"
            }
        }
    }).state("root.promoteManage.apply.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/list/_res/html/index.html",
                controller:'applyListCtrl'
            }
        }
    }).state("root.promoteManage.apply.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/add/_res/html/index.html",
                controller:'applyAddCtrl'
            }
        }
    }).state("root.promoteManage.apply.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/edit/_res/html/index.html",
                controller:'applyEditCtrl'
            }
        }
    }).state("root.promoteManage.apply.conform[12]",{
        url:"/conform[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/conform/_res/html/index.html",
                controller:'applyconformCtrl'
            }
        }
    }).state("root.promoteManage.apply.writeNum[12]",{
        url:"/writeNum[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/writeNum/_res/html/index.html",
                controller:'applywriteNumCtrl'
            }
        }
    }).state("root.promoteManage.apply.pManager[12]",{
        url:"/pManager[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/pManager/_res/html/index.html",
                controller:'applypManagerCtrl'
            }
        }
    }).state("root.promoteManage.apply.resource[12]",{
        url:"/resource[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/resource/_res/html/index.html",
                controller:'applyresourceCtrl'
            }
        }
    }).state("root.promoteManage.apply.business[12]",{
        url:"/business[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/business/_res/html/index.html",
                controller:'applybusinessCtrl'
            }
        }
    }).state("root.promoteManage.apply.moduler[12]",{
        url:"/moduler[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/moduler/_res/html/index.html",
                controller:'applymodulerCtrl'
            }
        }
    }).state("root.promoteManage.apply.writeManager[12]",{
        url:"/writeManager[12]?id=&page=",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/writeManager/_res/html/index.html",
                controller:'applywriteManagerCtrl'
            }
        }
    }).state("root.promoteManage.apply.rank[12]",{
        url:"/rank[12]",
        views:{
            "content@root.promoteManage.apply":{
                templateUrl : "root/promoteManage/apply/rank/_res/html/index.html",
                controller:'applyRankCtrl'
            }
        }
    })
});