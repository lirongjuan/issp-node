var app = angular.module('allevent', [{
    files:[
        "root/dealt/allevent/_res/js/service.js"
    ]
}]);
app.controller('alleventCtrl',function ($scope,$state) {

    if ($state.current.url == '/allevent') {//默认加载列表
        $state.go('root.dealt.allevent.list[12]')
    };
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('alleventMenuCtrl',function($scope,$state,$rootScope,$location,alleventSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] || window.location.href.split('cusNum=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function(name){
        var buttonName = name;
        $scope.buttonShow = true;
        alleventSer.menuPermission(buttonName).then(function(response){

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
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };

    $scope.eventCollect = function(){
        $scope.menuClass = 'eventCollectMenu'
    };
    $scope.handled=function(){
        $scope.menuClass = 'handledMenu'
    };
    $scope.untreated=function(){
        $scope.menuClass='untreatedMenu'
    }
    $scope.overdue=function(){
        $scope.menuClass='overdueMenu'
    }
    $scope.classify=function(){
        $scope.menuClass='classifyMenu'
    }
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

        }
        return result;
    }
});

