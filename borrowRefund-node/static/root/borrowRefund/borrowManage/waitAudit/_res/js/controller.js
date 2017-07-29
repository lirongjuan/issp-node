var app = angular.module('waitAudit', [{
    files:[
        "root/borrowRefund/borrowManage/waitAudit/_res/js/service.js"
    ]
}]);
app.controller('waitAuditCtrl',function ($scope,$state) {
    if ($state.current.url == '/waitAudit') {//默认加载列表
        $state.go('root.borrowRefund.borrowManage.waitAudit.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('waitAuditMenuCtrl',function($scope,$state,$rootScope,$location,waitAuditSer){
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
        waitAuditSer.menuPermission(buttonName).then(function(response){
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
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.borrowManage.waitAudit.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = "";
    };
    //审核详情
    $scope.auditDetail = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.borrowManage.waitAudit.auditDetail[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'auditDetailMenu'
        }
    };
    //审核人员审核
    $scope.chargerAudit = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.borrowManage.waitAudit.chargerAudit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'chargerAuditMenu'
        }
    }
    //总经办审核
    $scope.manageAudit = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.borrowManage.waitAudit.manageAudit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'manageAuditMenu'
        }
    }
     //运营部审核
    $scope.financeAudit = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.borrowManage.waitAudit.financeAudit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'financeAuditMenu'
        }
    }
    //运营部冻结 
    $scope.financeCongeal = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.borrowManage.waitAudit.list[12]',{id:$scope.idList,page:$scope.page,name:'financeCongeal'});
            $scope.menuClass = 'financeCongealMenu'
        }
    }
     //负责人冻结 
    $scope.chargerCongeal = function(){
        if($scope.congealId){
            $state.go('root.borrowRefund.borrowManage.waitAudit.list[12]',{id:$scope.congealId,page:$scope.page,name:'chargerCongeal'});
            $scope.menuClass = 'chargerCongealMenu'
        }
    }
});