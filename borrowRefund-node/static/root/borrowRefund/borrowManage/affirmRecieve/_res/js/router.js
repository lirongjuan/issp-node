var app = angular.module('affirmRecieve', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.affirmRecieve", {
        url : "/affirmRecieve",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/affirmRecieve/_res/html/index.html",
                controller:"affirmRecieveCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/affirmRecieve/_res/html/menu.html",
                controller:"affirmRecieveMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.affirmRecieve.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.affirmRecieve":{
                templateUrl : "root/borrowRefund/borrowManage/affirmRecieve/list/_res/html/index.html",
                controller:'affirmRecieveListCtrl'
            }
        }
    })
});