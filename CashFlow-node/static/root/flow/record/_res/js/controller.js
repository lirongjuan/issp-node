var app = angular.module('record', [{
    files:[
        "root/flow/record/_res/js/service.js"
    ]
}]);
app.controller('recordCtrl',function ($scope,$state) {
    if ($state.current.url == '/record') {
        $state.go('root.flow.record.list[12]');
    }
}).controller('recordMenuCtrl',function($scope,$state,$rootScope,$location,recordSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        recordSer.moneyPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };

    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.flow.record.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.flow.record.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.monthAll = function(){
        $scope.menuClass = 'monthAllMenu'
    };
    $scope.conditionsAll = function(){
        $scope.menuClass = 'conditionsAllMenu'
    };
    $scope.area = function(){
        $scope.menuClass = 'areaMenu'
    };
    $scope.project = function(){
        $scope.menuClass = 'projectMenu'
    };
    $scope.group = function(){
        $scope.menuClass = 'groupMenu'
    };
    //编辑
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.flow.record.upload[12]',{id:$scope.idList});
            $scope.menuClass = 'uploadMenu'
        }
    };
    //编辑
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.flow.record.view[12]',{id:$scope.idList});
            $scope.menuClass = 'viewMenu'
        }
    };
});
