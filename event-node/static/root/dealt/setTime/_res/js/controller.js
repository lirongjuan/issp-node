var app = angular.module('setTime', [{
    files:[
        "root/dealt/setTime/_res/js/service.js"
    ]
}]);
app.controller('setTimeCtrl',function ($scope,$state) {

    if ($state.current.url == '/setTime') {//默认加载列表
        $state.go('root.dealt.setTime.list[12]')
    };
}).controller('setTimeMenuCtrl',function($scope,$state,$rootScope,$location){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('name=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('name=')[1] &&  window.location.href.split('permissions=')) {//如果是刷新进来的页面，没有经过list
        $scope.name = window.location.href.split('name=')[1];
        $scope.permissions = window.location.href.split('permissions=')[1];
        if($location.search().name2){$scope.menuClass = $location.search().name2 + 'Menu'}
    }
    //监听到父Ctrl后改变事件
    $scope.$on("passName",function(event,names){
        $scope.name = names;
    });
    $scope.$on('passPermissions',function(event,flag){
        $scope.permissions = flag;
    });

    //编辑
    $scope.edit = function(){
        if($scope.name){
            $state.go('root.dealt.setTime.edit[12]',{name:$scope.name,permissions:$scope.permissions});
            $scope.menuClass='editMenu';
        }
    };
    $scope.congeal=function(){
        if($scope.name){
            $state.go('root.dealt.setTime.list[12]',{name:$scope.name,name2:"congeal",permissions:$scope.permissions});
            $scope.menuClass='congealMenu';
        }

    }

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
});
//自定义过滤器
app.filter('cover2', function(){
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
            case "COLLECT":
                result = "汇总";
                break;
            case "SEE":
                result = "查看";
                break;
            case "MAKE":
                result = "制作";
                break;
            case "ADUIT":
                result = "审核";
                break;
            case "CONFIRM":
                result = "确认";
                break;
            case "CHECK":
                result = "核对";
                break;
            case "ANALYZE":
                result = "分析";
                break;
            case "HAVEDEAL":
                result = "已处理";
                break;
            case "NOSEENODEAL":
                result = "未查看未处理";
                break;
            case "SEENODEAL":
                result = "查看未处理（待处理）";
                break;
            case "NODEAL":
                result = "逾期未处理";
                break;
            case "NORMAL":
                result = "正常";
                break;
            case "FREEZE":
                result = "冻结";
                break;

        }
        return result;
    }
});

