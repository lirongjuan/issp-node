var app = angular.module('conType', [{
    files:[
        "root/contract/conType/_res/js/service.js"
    ]
}]);
app.controller('conTypeCtrl',function ($scope,$state) {

    if ($state.current.url == '/conType') {//默认加载列表
        $state.go('root.contract.conType.list[12]')
    };
  
}).controller('conTypeMenuCtrl',function($scope,$state,$rootScope,$location,conTypeSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';

        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] ;
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }

    $scope.menuCheck = function (name){
        var buttonName = name;
        $scope.buttonShow = true;
        conTypeSer.menuPermission(buttonName).then(function(response){

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

    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.contract.conType.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
   
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.contract.conType.list[12]',{id:$scope.getId,name:'delete',page:$scope.page});
            $scope.menuClass='deleteMenu';
             }
    };
    $scope.congeal = function(){
        if($scope.getId){
            $state.go('root.contract.conType.list[12]',{id:$scope.getId,name:'congeal',page:$scope.page})
            $scope.menuClass='congealMenu';
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
            case "COLLECT":
                result = "汇总";
                break;
            case "UPLOAD":
                result = "上传附件";
                break;
            case "DOWNLOAD":
                result = "下载附件";
                break;
            case "CONGEL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }
});