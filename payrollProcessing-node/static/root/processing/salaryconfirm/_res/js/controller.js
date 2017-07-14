var app = angular.module('salaryconfirm', [{
    files:[
        "root/processing/salaryconfirm/_res/js/service.js"
    ]
}]);
app.controller('salaryconfirmCtrl',function ($scope,$state) {
    if ($state.current.url == '/salaryconfirm') {
        $state.go('root.processing.salaryconfirm.list[12]');
    }
}).controller('salaryconfirmMenuCtrl',function($scope,$state,$rootScope,$location,salaryconfirmSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}

    }
//功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        salaryconfirmSer.salaryconfirmPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, id){
        $scope.idList = id;
    });

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.processing.salaryconfirm.list[12]',{id:$scope.idList,name:'notarize',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.processing.salaryconfirm.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.processing.salaryconfirm.upload[12]',{id:$scope.idList});
            $scope.menuClass = 'uploadMenu'
        }
    };
    //查看下载
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.processing.salaryconfirm.view[12]',{id:$scope.idList});
            $scope.menuClass = 'viewMenu'
        }
    };
    //导入
    $scope.import = function(){
        $scope.menuClass = 'importMenu'
    };
    //导出
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "YES":
               result = "是";
               break;
           case "NOT":
               result = "否";
               break;
            case "WAIT":
               result = "等待确认薪资";
               break;
            case "CONFIRM":
               result = "已确认薪资";
               break;
            case "PAYED":
               result = "已付薪资";
               break;
            case "RECEIVED":
               result = "已确认收款薪资";
               break;
       }
       return result;
   }

});