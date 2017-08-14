var app = angular.module('plan', [{
    files:[
        "root/tenement/plan/_res/js/service.js"
    ]
}]);
app.controller('planCtrl',function ($scope,$state) {

    if ($state.current.url == '/plan') {//默认加载列表
        $state.go('root.tenement.plan.list[12]')
    };

}).controller('planMenuCtrl',function($scope,$state,$rootScope,$location,planSer){

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
        planSer.menuPermission(buttonName).then(function(response){

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
            $state.go('root.tenement.plan.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //
    $scope.finance = function(){
        if($scope.getId){
            $state.go('root.tenement.plan.finance[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='financeMenu';
        }
    };
    $scope.manager = function(){
        if($scope.getId){
            $state.go('root.tenement.plan.manager[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='managerMenu';
        }
    };
    //福利模块负责人审核
    $scope.business = function(){
        if($scope.getId){
            $state.go('root.tenement.plan.business[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='businessMenu';
        }
    };
    //项目经理审核
    $scope.resource = function(){
        if($scope.getId){
            $state.go('root.tenement.plan.resource[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='resourceMenu';
        }
    };
    //总经办审核
    $scope.general = function(){
        if($scope.getId){
            $state.go('root.tenement.plan.general[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='generalMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.tenement.plan.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
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
            case "BUSINESSAUDIT":
                result = "商务发展部审核";
                break;
            case "FINANCEAUDIT":
                result = "运营财务部审核";
                break;
            case "RESOURCEAUDIT":
                result = "综合资源部审核";
                break;
            case "MANAGERAUDIT":
                result = "项目经理审核";
                break;
            case "GENERALAUDIT":
                result = "总经办审核 ";
                break;

        }
        return result;
    }
});

