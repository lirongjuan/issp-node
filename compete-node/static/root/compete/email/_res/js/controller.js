var app = angular.module('email', [{
    files:[
        "root/compete/email/_res/js/service.js"
    ]
}]);
app.controller('emailCtrl',function ($scope,$state) {
    if ($state.current.url == '/email') {
        $state.go('root.compete.email.list');
    }
}).controller('emailMenuCtrl',function($scope,$state,$rootScope,$location,emailSer){
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
        emailSer.menuPermission(buttonName).then(function(response){
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

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.compete.email.list[12]',{id:$scope.idList,name:'delete'});
            $scope.menuClass = 'deleteMenu';
        }
    };
    //冻结
     $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.compete.email.list[12]',{id:$scope.idList,name:'congeal'});
             $scope.menuClass = 'congealMenu';
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.compete.email.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.idList = ''
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
        $scope.idList = ''
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "ONEDAY":
                result = "天";
                break;
            case "ONEWEEK":
                result = "周";
                break;
            case "ONEMONTH":
                result = "月";
                break;
        }
        return result;
    }

})

