var app = angular.module('settingMore', [{
    files:[
        "root/initialize/settingMore/_res/js/service.js"
    ]
}]);
app.controller('settingCtrl',function ($scope,$state) {

    if ($state.current.url == '/settingMore') {//默认加载列表
        $state.go('root.initialize.settingMore.list[12]')
    }

}).controller('settingMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]'){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.editId = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }

    $scope.$on('listId',function(event,id){
        $scope.editId=id;
    });

    $scope.list = function(){
        $state.go('root.initialize.settingMore.list[12]');
        $scope.menuClass = 'listMenu'
    };
    $scope.edit = function(){
        if($scope.editId){
            $state.go('root.initialize.settingMore.edit[12]',{id:$scope.editId});
            $scope.menuClass = 'editMenu'
        }
    }
});

app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LEVEL":
                result = "层级";
                break;
            case "MODULE":
                result = "模块";
                break;
            case "POSITION":
                result = "岗位";
                break;
            case "DEPART":
                result = "部门";
                break;
        }
        return result;
    }

})


