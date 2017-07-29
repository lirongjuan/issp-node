var app = angular.module('personDemand', [{
    files:[
        "root/projectmeasure/manage/personDemand/_res/js/service.js"
    ]
}]);
app.controller('personDemandCtrl',function ($scope,$state) {
    if ($state.current.url == '/personDemand') {//默认加载列表
        $state.go('root.projectmeasure.manage.personDemand.list[12]');
    }
}).controller('personDemandMenuCtrl',function($scope,$state,$rootScope,$location,marketserveSer){
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
        marketserveSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event,msg){
        $scope.idList = msg;
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
            $state.go('root.projectmeasure.manage.personDemand.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.projectmeasure.manage.personDemand.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu';
        }
    };
    //查看详情
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.projectmeasure.manage.personDemand.view[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'viewMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = '';
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = '';
    };
});

//设置自定义过滤器
app.filter('cover',function(){
    var result;
    return function(val){
        switch(val){
            case 'INTERIOR':
                result = "内部"
                break;
            case 'LEASE':
                result = "租赁"
                break;
        }
        return result;
    }
})