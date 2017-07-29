var app = angular.module('signingProject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.signingProject", {
        url : "/signingProject",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/signingProject/_res/html/index.html",
                controller:"signingCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/signingProject/_res/html/menu.html",
                controller:"signingMenuCtrl"
            }
        }
    }).state("root.businessContract.signingProject.list[12]",{
        url:"/list[12]?id=&name=&page=&type=&subject=&cooperate=&first=&second=&area=&property=&makeProject=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/list/_res/html/index.html",
                controller:'signingListCtrl'
            }
        }
    }).state("root.businessContract.signingProject.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/add/_res/html/index.html",
                controller:'signingAddCtrl'
            }
        }
    }).state("root.businessContract.signingProject.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/edit/_res/html/index.html",
                controller:'signingEditCtrl'
            }
        }
    }).state("root.businessContract.signingProject.review[12]",{
        url:"/review[12]?id=&page=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/review/_res/html/index.html",
                controller:'signingReviewCtrl'
            }
        }
    }).state("root.businessContract.signingProject.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/upload/_res/html/index.html",
                controller:'signingUploadCtrl'
            }
        }
    }).state("root.businessContract.signingProject.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/view/_res/html/index.html",
                controller:'signingViewCtrl'
            }
        }
    }).state("root.businessContract.signingProject.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/export/_res/html/index.html",
                controller:'signingExportCtrl'
            }
        }
    }).state("root.businessContract.signingProject.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/import/_res/html/index.html",
                controller:'signingimportCtrl'
            }
        }
    })
});