var app = angular.module('info', [{
    files:[
        "root/statement/info/_res/js/service.js"
    ]
}]);
app.controller('infoCtrl',function ($scope,$state) {

    if ($state.current.url == '/info') {//默认加载列表
        $state.go('root.statement.info.list[12]')
    }

}).controller('infoMenuCtrl',function($scope,$state,$rootScope,$location,infoSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] ) {//如果是刷新进来的页面，没有经过list
        $scope.hasId = window.location.href.split('id=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function(name){
        var buttonName = name;
        $scope.buttonShow = true;
        infoSer.menuPermission(buttonName).then(function(response){

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
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
        $scope.hasId = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.hasId = ''
    };
    $scope.edit=function(){
        if($scope.hasId){
            $state.go("root.statement.info.edit[12]",{id:$scope.hasId,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.delete=function(){
        if($scope.hasId){
            $state.go("root.statement.info.list[12]",{id:$scope.hasId,name:"delete",page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    }
    
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "MAIN":
                result = "主营业务成本";
                break;
            case "MARKET":
                result = "市场费";
                break;
            case "TRAINING":
                result = "培训费";
                break;
            case "LIST":
                result = "列表";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
        }
        return result;
    }
});

