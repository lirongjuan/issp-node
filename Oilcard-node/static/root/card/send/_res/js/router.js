var app = angular.module('send', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.send", {
        url : "/send",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/send/_res/html/index.html",
                controller:"sendCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/send/_res/html/menu.html",
                controller:"sendMenuCtrl"
            }
        }
    }).state("root.card.send.list[12]", {
        url : "/list[12]",
        views : {
            "content@root.card.send" : {
                templateUrl : "root/card/send/list/_res/html/index.html",
                controller:"sendListCtrl"
            }
        }
    }).state("root.card.send.analyse[12]", {
        url : "/analyse[12]",
        views : {
            "content@root.card.send" : {
                templateUrl : "root/card/send/analyse/_res/html/index.html",
                controller:"sendAnalyCtrl"
            }
        }
    })
});