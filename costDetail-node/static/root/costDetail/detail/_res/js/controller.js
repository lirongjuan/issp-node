var app = angular.module('detail', [{
    files:[
        "root/costDetail/detail/_res/js/service.js",
    ]
}]);
app.controller('detailCtrl',function ($scope,$state) {
    if ($state.current.url == '/detail') {//默认加载列表
        $state.go('root.costDetail.detail.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('detailMenuCtrl',function($scope,$state,$rootScope,$location,detailSer){
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
        detailSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.costDetail.detail.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.costDetail.detail.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idListd = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.monthCollect = function(){
        $scope.menuClass = 'monthCollectMenu';
        $scope.idListd = ''
    };
    $scope.yearCollect = function(){
        $scope.menuClass = 'yearCollectMenu';
        $scope.idListd = ''
    };
});

//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "LIST":
               result = "查看或列表";
               break;
           case "ADD":
               result = "添加";
               break;
           case "EDIT":
               result = "编辑";
               break;
           case "AUDIT":
               result = "审核";
               break;
           case "DELETE":
               result = "删除";
               break;
           case "CONGEL":
               result = "冻结";
               break;
           case "THAW":
               result = "解冻";
               break;
       }
       return result;
   }
});