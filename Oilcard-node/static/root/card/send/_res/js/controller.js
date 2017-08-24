var app = angular.module('send', [{
    files:[
        "root/card/send/_res/js/service.js"
    ]
}]);
app.controller('sendCtrl',function ($scope,$state) {

    if ($state.current.url == '/send') {//默认加载列表
        $state.go('root.card.send.list[12]')
    };

}).controller('sendMenuCtrl',function($scope,$state,$rootScope,$location,sendSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {//如果是刷新进来的页面，没有经过list
        $scope.hasId = window.location.href.split('id=')[1] || window.location.href.split('cusNum=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function(name){
        var buttonName = name;
        $scope.buttonShow = true;
        sendSer.menuPermission(buttonName).then(function(response){

            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    $scope.$on("passId",function(event,id){
        $scope.hasId=id;
    });
    $scope.list = function(){
        $state.go("root.card.send.list[12]");
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $state.go("root.card.send.analyse[12]");
        $scope.menuClass = 'analyseMenu'
    };
})
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "列表";
                break;
            case "COLLECT":
                result = "汇总";
                break;
            case "ANALYZE":
                result = "分析";
                break;
            case "COMPARE":
                result = "对比";
                break;
        }
        return result;
    }
})

