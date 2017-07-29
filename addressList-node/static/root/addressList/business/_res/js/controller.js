var app = angular.module('business', [{
    files:[
        "root/addressList/business/_res/js/service.js",
    ]
}]);
app.controller('businessCtrl',function ($scope,$state) {
    if ($state.current.url == '/business') {//默认加载列表
        $state.go('root.addressList.business.list[12]')
    }
}).controller('businessMenuCtrl',function($scope,$state,$rootScope,$location,businessSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        businessSer.menuPermission(buttonName).then(function(response){
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
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.addressList.business.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.addressList.business.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.addressList.business.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.addressList.business.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
});

//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "NONE":
               result = "无";
               break;
           case "MAN":
               result = "男";
               break;
           case "WOMAN":
               result = "女";
               break;
           case "VIP":
               result = "VIP客户";
               break;
           case "OLD":
               result = "老客户";
               break;
           case "COOPERATOR":
               result = "合作伙伴";
               break;
           case "ORDINARY":
               result = "普通客户";
               break;
            case "COMPLETEPROJECT":
               result = "已完成项目客户";
               break;
           case "PROJECTING":
               result = "现项目客户";
               break;
           case "POTENTIAL":
               result = "潜在客户";
               break;
       }
       return result;
   }
});