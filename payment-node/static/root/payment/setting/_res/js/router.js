var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.setting", {
        url : "/setting",
        views : {
            "content@root.payment" : {
                templateUrl : "root/payment/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.payment" : {
                templateUrl : "root/payment/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.payment.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.payment.setting":{
                templateUrl : "root/payment/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.payment.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.payment.setting":{
                templateUrl : "root/payment/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});