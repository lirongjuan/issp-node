var app = angular.module('already', [{
    files:[
        "root/bonus/already/_res/js/service.js"
    ]
}]);
app.controller('alreadyCtrl',function ($scope,$state) {
    if ($state.current.url == '/already') {//默认加载列表
        $state.go('root.bonus.already.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('alreadyMenuCtrl',function($scope,$state,$rootScope,$location,alreadySer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        alreadySer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.bonus.already.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = ''
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idList = ''
    };
    $scope.project = function(){
        $scope.menuClass = 'projectMenu';
        $scope.idList = ''
    };
    $scope.month = function(){
        $scope.menuClass = 'monthMenu';
        $scope.idList = ''
    };
    $scope.year = function(){
        $scope.menuClass = 'yearMenu';
        $scope.idList = ''
    };
    $scope.difference = function(){
        $scope.menuClass = 'differenceMenu';
        $scope.idList = ''
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "查看或列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "DELETE":
                result = "删除";
                break;
        }
        return result;
    }

})

