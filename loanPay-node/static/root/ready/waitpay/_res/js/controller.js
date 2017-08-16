var app = angular.module('waitpay', [{
    files:[
        "root/ready/waitpay/_res/js/service.js"
    ]
}]);
app.controller('waitpayCtrl',function ($scope,$state) {

    if ($state.current.url == '/waitpay') {//默认加载列表
        $state.go('root.ready.waitpay.list[12]')
    };

}).controller('waitpayMenuCtrl',function($scope,$state,$rootScope,$location,waitpaySer){

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
        waitpaySer.menuPermission(buttonName).then(function(response){

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
    $scope.pay = function(){
        if($scope.getId){
            $state.go('root.ready.waitpay.pay[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='payMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.ready.waitpay.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
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
            case "EXPORT":
                result = "导出";
                break;
            case "WAITPAY":
                result = "等待付款";
                break;
            case "HAVEPAY":
                result = "已付款";
                break;

        }
        return result;
    }
});

