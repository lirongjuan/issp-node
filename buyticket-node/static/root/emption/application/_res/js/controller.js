var app = angular.module('application', [{
    files:[
        "root/emption/application/_res/js/service.js"
    ]
}]);
app.controller('applicationCtrl',function ($scope,$state) {

    if ($state.current.url == '/application') {//默认加载列表
        $state.go('root.emption.application.list[12]')
    };

}).controller('applicationMenuCtrl',function($scope,$state,$rootScope,$location,applicationSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {  //如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1]
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function(name){
        var buttonName = name;
        $scope.buttonShow = true;
        applicationSer.menuPermission(buttonName).then(function(response){

            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }

    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.emption.application.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //规划模块审核意见
    $scope.planaudit=function(){
        if($scope.getId){
            $state.go('root.emption.application.planaudit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='planauditMenu';
        }
    }
    //福利模块审核意见
    $scope.welfaudit=function(){
        if($scope.getId){
            $state.go('root.emption.application.welfaudit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='welfauditMenu';
        }
    }
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.emption.application.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.getId = ''
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "列表";
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
            case "PLANAUDIT":
                result = "规划模块审核";
                break;
            case "WELFAUDIT":
                result = "福利模块审核";
                break;
            case "NONE":
                result = "未通过";
                break;
            case "ALLOWED":
                result = "通过";
                break;
            case "DENIED":
                result = "拒绝";
                break;
            case "TO":
                result = "往";
                break;
            case "RETURN":
                result = "返";
                break;

        }
        return result;
    }
});

