var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.setting", {
        url : "/setting",
        views : {
            "content@root.borrowRefund" : {
                templateUrl : "root/borrowRefund/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.borrowRefund" : {
                templateUrl : "root/borrowRefund/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.borrowRefund.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.setting":{
                templateUrl : "root/borrowRefund/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.borrowRefund.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.borrowRefund.setting":{
                templateUrl : "root/borrowRefund/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});