var app = angular.module('Since', [{
    files:[
        "root/leave/Since/_res/js/service.js",
    ]
}]);
app.controller('SinceCtrl',function ($scope,$state) {
    if ($state.current.url == '/Since') {//默认加载列表
        $state.go('root.leave.Since.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('SinceMenuCtrl',function($scope,$state,$rootScope,$location,sinSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
//如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }

    }
    // $scope.menuCheck = function (name) {
    //     var buttonName = name;
    //     $scope.buttonShow = true;
    //     sinSer.sinGuide(buttonName).then(function(response){
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
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.leave.Since.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.leave.Since.edit[12]',{id:$scope.idListd,page:$scope.page});
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
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "NORMAL":
                result = "正常离职";
                break;
            case "ADVANCE":
                result = "提前离职";
                break;
            case "PRESUME":
                result = "自离";
                break;
            case "REFUSE":
                result = "辞退";
                break;
            case "TRIAL":
                result = "试用期员工";
                break;
            case "FORMAL":
                result = "正式员工";
                break;
            case "APPLY":
                result = "申请离职";
                break;
            case "FAIL":
                result = "离职失败";
                break;
            case "SUCCESS":
                result = "成功离职";
                break;
            case "PREPARE":
                result = "预备离职";
                break;
            case "NOT":
                result = "未离职";
                break;
            case "AFFIRM":
                result = "确认离职";
                break;
            case "NONE":
                result = "未确认";
                break;
            case "AFFIRM":
                result = "确认";
                break;
            case "DENY":
                result = "否认";
                break;
        }
        return result;
    }
});