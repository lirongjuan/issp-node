var app = angular.module('demand', [{
    files:[
        "root/assessment/demand/_res/js/service.js",
    ]
}]);
app.controller('demandCtrl',function ($scope,$state) {
    if ($state.current.url == '/demand') {//默认加载列表
        $state.go('root.assessment.demand.list')
    }

}).controller('demandMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assessment.demand.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    }
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.demand.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

//自定义过滤
