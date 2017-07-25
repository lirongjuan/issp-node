var app = angular.module('move', [{
    files:[
        "root/shift/move/_res/js/service.js"
    ]
}]);
app.controller('moveCtrl',function ($scope,$state) {

    if ($state.current.url == '/move') {//默认加载列表
        $state.go('root.shift.move.list[12]')
    };

}).controller('moveMenuCtrl',function($scope,$state,$rootScope,$location,moveSer){

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
        moveSer.menuPermission(buttonName).then(function(response){

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
            $state.go('root.shift.move.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //福利模块确认
    $scope.confirm = function(){
        if($scope.getId){
            $state.go('root.shift.move.confirm[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='confirmMenu';
        }
    };
    //福利模块负责人审核
    $scope.verify = function(){
        if($scope.getId){
            $state.go('root.shift.move.verify[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='verifyMenu';
        }
    };
    //项目经理审核
    $scope.aduit = function(){
        if($scope.getId){
            $state.go('root.shift.move.aduit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='aduitMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.shift.move.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
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
            case "MANAGEAUDIT":
                result = "项目经理审核";
                break;
            case "MODULAUDIT":
                result = "福利模块审核";
                break;
            case "NONE":
                result = "未审核";
                break;
            case "ALLOWED":
                result = "通过";
                break;
            case "DENIED":
                result = "拒绝 ";
                break;
            case "EXPRESS":
                result = "快递";
                break;
            case "MANPOWER":
                result = "人员带动 ";
                break;
            case "BUY":
                result = "采购";
                break;
            case "ALLOWED":
                result = "外借";
                break;
            case "INTACT":
                result = "完好";
                break;
            case "DAMAGED":
                result = "损坏";
                break;
            case "MAINTENANCE":
                result = "维修中";
                break;
            case "BAD":
                result = "已报废";
                break;
            case true:
                result = "已确认";
                break;
            case false:
                result = "未确认";
                break;
        }
        return result;
    }
});

