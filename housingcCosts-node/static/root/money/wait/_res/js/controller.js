var app = angular.module('wait', [{
    files:[
        "root/money/wait/_res/js/service.js",
    ]
}]);
app.controller('waitCtrl',function ($scope,$state) {
    if ($state.current.url == '/wait') {//默认加载列表
        $state.go('root.money.wait.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('waitMenuCtrl',function($scope,$state,$rootScope,$location,waitSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.menuClass = $location.search().name + 'Menu';

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        waitSer.waitPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.money.wait.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.payment = function(){
        if($scope.idListd){
            $state.go('root.money.wait.list[12]',{id:$scope.idListd,name:'payment',page:$scope.page});
            $scope.menuClass = 'paymentMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.money.wait.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
});
//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "IS":
                result = "是";
                break;
            case "NO":
                result = "否";
                break;          
        }
        return result;
    }
});