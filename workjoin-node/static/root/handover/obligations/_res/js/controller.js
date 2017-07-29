var app = angular.module('obligations', [{
    files:[
        "root/handover/obligations/_res/js/service.js"
    ]
}]);
app.controller('obligationsCtrl',function ($scope,$state) {
    if ($state.current.url == '/obligations') {
        $state.go('root.handover.obligations.list');
    }
}).controller('obligationsMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.handover.obligations.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.handover.obligations.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.handover.obligations.list.upload[12]',{id:$scope.idList});
            $scope.menuClass = 'uploadMenu'
        }
    };
    //下载
    $scope.download = function(){
        if($scope.idList){
            $state.go('root.handover.obligations.list.download[12]',{id:$scope.idList});
            $scope.menuClass = 'downloadMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
