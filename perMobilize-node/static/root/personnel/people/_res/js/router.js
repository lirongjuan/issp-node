var app = angular.module('people', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.personnel.people", {
        url : "/people",
        views : {
            "content@root.personnel" : {
                templateUrl : "root/personnel/people/_res/html/index.html",
                controller:"peopleCtrl"
            },"menu@root.personnel" : {
                templateUrl : "root/personnel/people/_res/html/menu.html",
                controller:"peopleMenuCtrl"
            }
        }
    }).state("root.personnel.people.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/list/_res/html/index.html",
                controller:'peopleListCtrl'
            }
        }
    }).state("root.personnel.people.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/add/_res/html/index.html",
                controller:'peopleAddCtrl'
            }
        }
    }).state("root.personnel.people.auditD[12]",{
        url:"/auditD[12]?id=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/auditD/_res/html/index.html",
                controller:'peopleAuditDCtrl'
            }
        }
    }).state("root.personnel.people.auditG[12]",{
        url:"/auditG[12]?id=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/auditG/_res/html/index.html",
                controller:'peopleAuditGCtrl'
            }
        }
    }).state("root.personnel.people.auditS[12]",{
        url:"/auditS[12]?id=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/auditS/_res/html/index.html",
                controller:'peopleAuditSCtrl'
            }
        }
    }).state("root.personnel.people.auditY[12]",{
        url:"/auditY[12]?id=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/auditY/_res/html/index.html",
                controller:'peopleAuditYCtrl'
            }
        }
    }).state("root.personnel.people.auditZ[12]",{
        url:"/auditZ[12]?id=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/auditZ/_res/html/index.html",
                controller:'peopleAuditZCtrl'
            }
        }
    }).state("root.personnel.people.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.personnel.people":{
                templateUrl : "root/personnel/people/edit/_res/html/index.html",
                controller:'peopleEditCtrl'
            }
        }
    })
});