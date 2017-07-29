var app = angular.module('hasPay', [{
    files:[
        "root/borrowRefund/refundManage/hasPay/_res/js/service.js"
    ]
}]);
app.controller('hasPayCtrl',function ($scope,$state) {
    if ($state.current.url == '/hasPay') {//默认加载列表
        $state.go('root.borrowRefund.refundManage.hasPay.list[12]');
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('hasPayMenuCtrl',function($scope,$state,$rootScope,$location,hasPaySer){
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
        hasPaySer.menuPermission(buttonName).then(function(response){
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
    //删除
    $scope.voucher = function(){
        if($scope.idList){
            $state.go('root.borrowRefund.refundManage.hasPay.voucher[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'voucherMenu'
        }
    }
    $scope.lender = function(){
        $scope.menuClass = 'lenderMenu';
        $scope.idList = '';
    }
    $scope.pGroup = function(){
        $scope.menuClass = 'pGroupMenu';
        $scope.idList = '';
    }
    $scope.area = function(){
        $scope.menuClass = 'areaMenu';
        $scope.idList = '';
    }
    $scope.pName = function(){
        $scope.menuClass = 'pNameMenu';
        $scope.idList = '';
    }
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idList = ''
    };
});