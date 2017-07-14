var app = angular.module('pay', [{
    files:[
        "root/equipment/pay/_res/js/service.js",
    ]
}]);
app.controller('paingCtrl',function ($scope,$state) {
    if ($state.current.url == '/pay') {//默认加载列表
        $state.go('root.equipment.pay.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('paingMenuCtrl',function($scope,$state,$rootScope,$location,paingSer){
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
        paingSer.payingPermission(buttonName).then(function(response){
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
            $state.go('root.equipment.pay.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.equipment.pay.edit[12]',{id:$scope.idListd,page:$scope.page});
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
    $scope.summaryArea = function(){
        $scope.menuClass = 'summaryAreaMenu'
    };
    $scope.summaryDepartment = function(){
        $scope.menuClass = 'summaryDepartmentMenu'
    };
    $scope.summaryEquip = function(){
        $scope.menuClass = 'summaryEquipMenu'
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