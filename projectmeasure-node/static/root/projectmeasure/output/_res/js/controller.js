var app = angular.module('apple', [{
    files:[
        "root/projectmeasure/output/_res/js/service.js"
    ]
}]);
app.controller('appleCtrl',function ($scope,$state) {
    if ($state.current.url == '/output') {//默认加载列表
        $state.go('root.projectmeasure.output.list[12]');
    }
}).controller('outputMeduleMenuCtrl',function($scope,$state,$rootScope,$location,outputSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        outputSer.menuPermission(buttonName).then(function(response){
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
        $scope.menuClass = 'listMenu'
    };
});