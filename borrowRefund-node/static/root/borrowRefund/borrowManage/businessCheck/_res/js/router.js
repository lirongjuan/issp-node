var app = angular.module('businessCheck', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.businessCheck", {
        url : "/businessCheck",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/_res/html/index.html",
                controller:"businessCheckCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/_res/html/menu.html",
                controller:"businessCheckMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.businessCheck.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.businessCheck":{
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/list/_res/html/index.html",
                controller:'businessCheckListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.businessCheck.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.businessCheck":{
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/edit/_res/html/index.html",
                controller:'businessCheckeditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.businessCheck.editSend[12]",{
        url:"/editSend[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.businessCheck":{
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/editSend/_res/html/index.html",
                controller:'editSendCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.businessCheck.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.businessCheck":{
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/upload/_res/html/index.html",
                controller:'businessCheckUploadCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.businessCheck.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.borrowRefund.borrowManage.businessCheck":{
                templateUrl : "root/borrowRefund/borrowManage/businessCheck/view/_res/html/index.html",
                controller:'businessCheckViewCtrl'
            }
        }
    })
});