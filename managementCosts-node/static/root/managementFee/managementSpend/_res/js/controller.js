var app = angular.module('managementSpend', [{
    files:[
        "root/managementFee/managementSpend/_res/js/service.js",
    ]
}]);
app.controller('spendCtrl',function ($scope,$state) {
    if ($state.current.url == '/managementSpend') {//默认加载列表
        $state.go('root.managementFee.managementSpend.list[12]')
    }

}).controller('spendMenuCtrl',function($scope,$state,$rootScope,$location,spendSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        spendSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.managementFee.managementSpend.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.managementFee.managementSpend.edit[12]',{id:$scope.idListd,page:$scope.page});
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
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu';
        $scope.idListd = ''
    };
    $scope.teamSummary = function(){
        $scope.menuClass = 'teamSummaryMenu';
        $scope.idListd = ''
    };
    $scope.categorySummary = function(){
        $scope.menuClass = 'categorySummaryMenu';
        $scope.idListd = ''
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu';
        $scope.idListd = ''
    };
});
//自定义过滤器
app.filter('cover',function(){
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
            case "COLLECT":
                result = "汇总";
                break;
            case "SEE":
                result = "查看";
                break;

        }
        return result;
    }

});