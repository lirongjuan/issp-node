var app = angular.module('recieveTicket', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.recieveTicket", {
        url : "/recieveTicket",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/recieveTicket/_res/html/index.html",
                controller:"recieveTicketCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/recieveTicket/_res/html/menu.html",
                controller:"recieveTicketMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.recieveTicket.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.recieveTicket":{
                templateUrl : "root/borrowRefund/borrowManage/recieveTicket/list/_res/html/index.html",
                controller:'recieveTicketListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.recieveTicket.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.borrowManage.recieveTicket":{
                templateUrl : "root/borrowRefund/borrowManage/recieveTicket/export/_res/html/index.html",
                controller:'recieveTicketExportCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.recieveTicket.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.recieveTicket":{
                templateUrl : "root/borrowRefund/borrowManage/recieveTicket/upload/_res/html/index.html",
                controller:'recieveTicketUploadCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.recieveTicket.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.borrowRefund.borrowManage.recieveTicket":{
                templateUrl : "root/borrowRefund/borrowManage/recieveTicket/view/_res/html/index.html",
                controller:'recieveTicketViewCtrl'
            }
        }
    })
});