var app = angular.module('servereCord', [{
    files:[
        "root/marketActivity/servereCord/_res/js/service.js"
    ]
}]);
app.controller('servereCordCtrl',function ($scope,$state) {
     if ($state.current.url == '/marketserve') {//默认加载列表
        $state.go('root.marketActivity.servereCord.list[12]');
    }
}).controller('servereCordMenuCtrl',function($scope,$state,$rootScope,$location,servereCordSer){
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
        servereCordSer.menuPermission(buttonName).then(function(response){
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
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
        $scope.idList = '';
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.idList = '';
    };
    //添加客户信息
    $scope.addcustomer = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.addcustomer[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'addcustomerMenu';
        }
    };
    //编辑 市场招待信息
    $scope.organize = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.organize[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'organizeMenu'
        }
    }
    //编辑 决策层审核信息
    $scope.executiveOpinion = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.executiveOpinion[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'executiveOpinionMenu'
        }
    }
    //查看客户信息列表
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.see[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'seeMenu';
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.upload[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.view[12]',{id:$scope.idList,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idList = '';
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idList = '';
    };
});