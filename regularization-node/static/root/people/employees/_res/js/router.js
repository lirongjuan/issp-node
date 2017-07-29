var app = angular.module('employees', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.employees", {
        url : "/employees",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/employees/_res/html/index.html",
                controller:"employCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/employees/_res/html/menu.html",
                controller:"employMenuCtrl"
            }
        }
    }).state("root.people.employees.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/list/_res/html/index.html",
                controller:'employListCtrl'
            }
        }
    }).state("root.people.employees.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/add/_res/html/index.html",
                controller:'employAddCtrl'
            }
        }
    }).state("root.people.employees.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/edit/_res/html/index.html",
                controller:'employEditCtrl'
            }
        }
        //-------------------------------------------------
    }).state("root.people.employees.management[12]",{
        url:"/management[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/management/_res/html/index.html",
                controller:'employManagementCtrl'
            }
        }
    }).state("root.people.employees.listExamine[12]",{
        url:"/listExamine[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/listExamine/_res/html/index.html",
                controller:'employListExamineCtrl'
            }
        }
    }).state("root.people.employees.making[12]",{
        url:"/making[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/making/_res/html/index.html",
                controller:'employMakingCtrl'
            }
        }
    }).state("root.people.employees.planning[12]",{
        url:"/planning[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/planning/_res/html/index.html",
                controller:'employPlanningCtrl'
            }
        }
    }).state("root.people.employees.budget[12]",{
        url:"/budget[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/budget/_res/html/index.html",
                controller:'employBudgetCtrl'
            }
        }
    }).state("root.people.employees.director[12]",{
        url:"/director[12]?id=&page=",
        views:{
            "content@root.people.employees":{
                templateUrl : "root/people/employees/director/_res/html/index.html",
                controller:'employDirectorCtrl'
            }
        }
    })
});