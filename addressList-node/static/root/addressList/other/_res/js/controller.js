var app = angular.module('other', [{
    files:[
        "root/addressList/other/_res/js/service.js",
    ]
}]);
app.controller('otherCtrl',function ($scope,$state) {
    if ($state.current.url == '/other') {//默认加载列表
        $state.go('root.addressList.other.list[12]')
    }
}).controller('otherMenuCtrl',function($scope,$state,$rootScope,$location,otherSer){
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
        otherSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.addressList.other.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.addressList.other.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
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