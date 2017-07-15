/**
 * Created by ike on 2017/5/3.
 */
var app = angular.module('winningBasic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.basicinfo.winning",{
        url:"/winning?id=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/winning/_res/html/index.html",
                controller:'winningBasicCtrl'
            }
        }
    }).state("root.supplier.basicinfo.winning.rewardDelete[12]",{
        url:"/rewardDelete[12]? =",
        views:{
            "modal@root.supplier.basicinfo.winning":{
                templateUrl : "root/supplier/basicinfo/winning/rewardDelete/_res/html/index.html",
                controller:'rewardDeleteCtrl'
            }
        }
    }).state("root.supplier.basicinfo.winning.rewardEdit[12]",{
        url:"/rewardEdit[12]?subId=",
        views:{
            "content@root.supplier.basicinfo.winning":{
                templateUrl : "root/supplier/basicinfo/winning/rewardEdit/_res/html/index.html",
                controller:'rewardEditCtrl'
            }
        }
    })
});