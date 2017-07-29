var app = angular.module('message', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.otherexpenses.expenses.message", {
        url : "/message",
        views : {  
            "content@root.otherexpenses.expenses" : {
                templateUrl : "root/otherexpenses/expenses/message/_res/html/index.html",
                controller:"messageCtrl"
            },"nav@root.otherexpenses.expenses" : {
                templateUrl : "root/otherexpenses/expenses/message/_res/html/menu.html",
                controller:"messageMenuCtrl"
            }
        }
    }).state("root.otherexpenses.expenses.message.list[12]",{
        url:"/list[12]?id=&page=&name=",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/list/_res/html/index.html",
                controller:'messageListCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/add/_res/html/index.html",
                controller:'messageAddCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/edit/_res/html/index.html",
                controller:'currenyEditCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/area/_res/html/index.html",
                controller:'areaCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.projectgroup[12]",{
        url:"/projectgroup[12]",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/projectgroup/_res/html/index.html",
                controller:'projectgroupCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.projectType[12]",{
        url:"/projectType[12]",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/projectType/_res/html/index.html",
                controller:'projectTypeCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.projectName[12]",{
        url:"/projectName[12]",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/projectName/_res/html/index.html",
                controller:'projectNameCtrl'
            }
        }
    })
});