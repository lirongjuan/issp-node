var app = angular.module('device', [{
    files:[
        "root/hand/device/_res/js/service.js"
    ]
}]);
app.controller('deviceCtrl',function ($scope,$state) {

    if ($state.current.url == '/device') {//默认加载列表
        $state.go('root.hand.device.list[12]')
    };

}).controller('deviceMenuCtrl',function($scope,$state,$rootScope,$location,deviceSer){

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
        deviceSer.menuPermission(buttonName).then(function(response){

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

    //上传附件
    $scope.upload = function(){
        if($scope.getId){
            $state.go('root.hand.device.upload[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='uploadMenu';
        }
    };
    //查看附件
    $scope.download = function(){
        if($scope.getId){
            $state.go('root.hand.device.view[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='viewMenu';
        }
    };

    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.hand.device.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };

    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.hand.device.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
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
            case "UPLOAD":
                result = "上传附件";
                break;
            case "SEEFILE":
                result = "查看附件";
                break;

        }
        return result;
    }
});

