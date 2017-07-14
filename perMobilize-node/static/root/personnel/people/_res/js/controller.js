var app = angular.module('people', [{
    files:[
        "root/personnel/people/_res/js/service.js",
    ]
}]);
app.controller('peopleCtrl',function ($scope,$state) {
    if ($state.current.url == '/people') {//默认加载列表
        $state.go('root.personnel.people.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('peopleMenuCtrl',function($scope,$state,$rootScope,$location,peopleSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.menuClass = $location.search().name + 'Menu';

    }
    // $scope.menuCheck = function (name) {
    //     var buttonName = name;
    //     $scope.buttonShow = true;
    //     peopleSer.popPermission(buttonName).then(function(response){
    //         if(response.data.code == 0 && response.data.data){
    //             $scope[buttonName] = true;
    //         }else{
    //             $scope[buttonName] = false;
    //         }
    //     });
    //     $scope.menuAdd = false;
    // };
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
            $state.go('root.personnel.people.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    }
    $scope.auditD = function(){
        if($scope.idListd){
            $state.go('root.personnel.people.auditD[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditDMenu'
        }
    }
    $scope.auditG = function(){
        if($scope.idListd){
            $state.go('root.personnel.people.auditG[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditGMenu'
        }
    }
    $scope.auditS = function(){
        if($scope.idListd){
            $state.go('root.personnel.people.auditS[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditSMenu'
        }
    }
    $scope.auditY = function(){
        if($scope.idListd){
            $state.go('root.personnel.people.auditY[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditYMenu'
        }
    }
    $scope.auditZ = function(){
        if($scope.idListd){
            $state.go('root.personnel.people.auditZ[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditZMenu'
        }
    }
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.personnel.people.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "GENERALMANAGER":
                result = "总经办";
                break;
            case "ORIGINALPOLICYMAKERS":
                result = "原决策层";
                break;
            case "TRANSFERREDPOLICYMAKERS":
                result = "调往决策层";
                break;
            case "PLANMODULE":
                result = "规划模块";
                break;
            case "BUDGETMODULE":
                result = "预算模块";
                break;
        }
        return result;
    }
});