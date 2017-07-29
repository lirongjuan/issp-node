var app = angular.module('rhasAudit', [{
    files:[
        "root/borrowRefund/refundManage/rhasAudit/_res/js/service.js"
    ]
}]);
app.controller('rhasAuditCtrl',function ($scope,$state) {
    if ($state.current.url == '/rhasAudit') {//默认加载列表
        $state.go('root.borrowRefund.refundManage.rhasAudit.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('rhasAuditMenuCtrl',function($scope,$state,$rootScope,$location,rhasAuditSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        rhasAuditSer.menuPermission(buttonName).then(function(response){
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
    //监听到父Ctrl后改变事件
    $scope.$on("conealId", function(event, id){
        $scope.congealId = id;
    });
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = "";
    };
    //分析 
    $scope.chargerAudit = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.rhasAudit.chargerAudit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'chargerAuditMenu'
        }
    }
    //运营部冻结 
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.rhasAudit.list[12]',{id:$scope.idList,name:'congeal',page:$scope.page});
            $scope.menuClass = 'congealMenu'
        }
    }
});