var app = angular.module('level', [{
    files:[
        "root/promoteManage/level/_res/js/service.js",
    ]
}]);
app.controller('levelCtrl',function ($scope,$state) {
    if ($state.current.url == '/level') {//默认加载列表
        $state.go('root.promoteManage.level.list[12]')
    }
}).controller('levelMenuCtrl',function($scope,$state,$rootScope,$location,levelSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        levelSer.menuPermission(buttonName).then(function(response){
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idListd = ''
    };
});