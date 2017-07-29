var app = angular.module('rwaitAudit', [{
    files:[
        "root/borrowRefund/refundManage/rwaitAudit/_res/js/service.js"
    ]
}]);
app.controller('rwaitAuditCtrl',function ($scope,$state) {
    if ($state.current.url == '/rwaitAudit') {//默认加载列表
        $state.go('root.borrowRefund.refundManage.rwaitAudit.list');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('rwaitAuditMenuCtrl',function($scope,$state,$rootScope,$location,rwaitAuditSer){
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
        rwaitAuditSer.menuPermission(buttonName).then(function(response){
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = "";
    };
    //审核人员审核
    $scope.chargerAudit = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.rwaitAudit.chargerAudit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'chargerAuditMenu'
        }
    }
    //运营部冻结 
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.rwaitAudit.list[12]',{id:$scope.idList,page:$scope.page,name:'congeal'});
            $scope.menuClass = 'congealMenu'
        }
    }
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.rwaitAudit.upload[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.rwaitAudit.view[12]',{id:$scope.idList,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
});