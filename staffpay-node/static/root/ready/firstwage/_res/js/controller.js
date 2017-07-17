var app = angular.module('firstwage', [{
    files:[
        "root/ready/firstwage/_res/js/service.js"
    ]
}]);
app.controller('firstwageCtrl',function($scope,$state) {

    if ($state.current.url == '/firstwage') {  //默认加载列表
        $state.go('root.ready.firstwage.list[12]')
    };

}).controller('firstwageMenuCtrl',function($scope,$state,$rootScope,$location,firstwageSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] || window.location.href.split('cusNum=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function(name){
        var buttonName = name;
        $scope.buttonShow = true;
        firstwageSer.menuPermission(buttonName).then(function(response){

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

    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.ready.firstwage.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };
    //付款
    $scope.audit=function(){
        if($scope.getId){
            $state.go('root.ready.firstwage.list[12]',{id:$scope.getId,name:"audit",page:$scope.page});
            $scope.menuClass='auditMenu';
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
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
            case "DELETE":
                result = "删除";
                break;
            case "AUDIT":
                result = "付款";
                break;
            case "NO":
                result = "否";
                break;
            case "YES":
                result = "是";
                break;
            case "WAIT":
                result = "等待付款";
                break;
            case "FIRST":
                result = "第一次付款";
                break;
            case "CONFIRM":
                result = "已付款";
                break;
        }
        return result;
    }
});

