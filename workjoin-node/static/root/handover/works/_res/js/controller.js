var app = angular.module('works', [{
    files:[
        "root/handover/works/_res/js/service.js"
    ]
}]);
app.controller('worksCtrl',function ($scope,$state) {
    if ($state.current.url == '/works') {
        $state.go('root.handover.works.list');
    }
}).controller('worksMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.handover.works.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.handover.works.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.handover.works.list.upload[12]',{id:$scope.idList});
            $scope.menuClass = 'uploadMenu'
        }
    };
    //下载
    $scope.download = function(){
        if($scope.idList){
            $state.go('root.handover.works.list.download[12]',{id:$scope.idList});
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
