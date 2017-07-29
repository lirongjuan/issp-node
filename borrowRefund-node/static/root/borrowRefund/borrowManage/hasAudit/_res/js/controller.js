var app = angular.module('hasAudit', [{
    files:[
        "root/borrowRefund/borrowManage/hasAudit/_res/js/service.js"
    ]
}]);
app.controller('hasAuditCtrl',function ($scope,$state) {
    if ($state.current.url == '/hasAudit') {//默认加载列表
        $state.go('root.borrowRefund.borrowManage.hasAudit.list');
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('hasAuditMenuCtrl',function($scope,$state,$rootScope,$location,hasAuditSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        hasAuditSer.menuPermission(buttonName).then(function(response){
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";
    };
});