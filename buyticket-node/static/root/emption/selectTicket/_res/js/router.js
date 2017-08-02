var app = angular.module('selectTicket', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.emption.selectTicket", {
        url : "/selectTicket",
        views : {
            "content@root.emption" : {
                templateUrl : "root/emption/selectTicket/_res/html/index.html",
                controller:"selectTicketCtrl"
            },"menu@root.emption" : {
                templateUrl : "root/emption/selectTicket/_res/html/menu.html",
                controller:"selectTicketMenuCtrl"
            }
        }
    }).state("root.emption.selectTicket.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.emption.selectTicket":{
                templateUrl : "root/emption/selectTicket/list/_res/html/index.html",
                controller:'selectTicketListCtrl'
            }
        }
    }).state("root.emption.selectTicket.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.emption.selectTicket":{
                templateUrl : "root/emption/selectTicket/edit/_res/html/index.html",
                controller:'selectTicketEditCtrl'
            }
        }
    })
});