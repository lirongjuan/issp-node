/**
 * Created by ike on 2017/5/3.
 */
var app = angular.module('contactBasic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.basicinfo.contact",{
        url:"/contact?id=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/contact/_res/html/index.html",
                controller:'contactBasicCtrl'
            }
        }
    }).state("root.supplier.basicinfo.contact.contactDelete[12]",{
        url:"/contactDelete[12]?suId=&page=",
        views:{
            "modal@root.supplier.basicinfo.contact":{
                templateUrl : "root/supplier/basicinfo/contact/contactDelete/_res/html/index.html",
                controller:'contactDeleteCtrl'
            }
        }
    }).state("root.supplier.basicinfo.contact.contactEdit[12]",{
        url:"/contactEdit[12]?suId=&page=",
        views:{
            "content@root.supplier.basicinfo.contact":{
                templateUrl : "root/supplier/basicinfo/contact/contactEdit/_res/html/index.html",
                controller:'contactEditCtrl'
            }
        }
    })
});