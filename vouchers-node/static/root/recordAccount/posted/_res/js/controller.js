var app = angular.module('posted', [{
    files:[
        "root/recordAccount/posted/_res/js/service.js",
    ]
}]);
app.controller('postedCtrl',function ($scope,$state) {
    if ($state.current.url == '/posted') {//默认加载列表
        $state.go('root.recordAccount.posted.list[12]')
    }

}).controller('postedMenuCtrl',function($scope,$state,$rootScope,$location,postedSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('ids=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.ids = window.location.href.split('ids=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        postedSer.menuPermission(buttonName).then(function(response){
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
    $scope.$on("checkIds", function(event, msg){
       $scope.ids = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.bill = function(){
        if($scope.ids){
            $state.go('root.recordAccount.posted.list[12]',{ids:$scope.ids,name:'bill',page:$scope.page});
            $scope.menuClass = 'billMenu'
        }
    };

    $scope.postponement = function(){
        if($scope.idListd){
            $state.go('root.recordAccount.posted.list[12]',{id:$scope.idListd,name:'postponement',page:$scope.page});
            $scope.menuClass = 'postponementMenu'
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.subjectsSummary = function(){
        $scope.menuClass = 'subjectsSummaryMenu';
        $scope.idListd = '';
        $scope.ids = '';
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu';
        $scope.idListd = '';
        $scope.ids = '';
    };
    $scope.teamSummary = function(){
        $scope.menuClass = 'teamSummaryMenu';
        $scope.idListd = '';
        $scope.ids = '';
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu';
        $scope.idListd = '';
        $scope.ids = '';
    };
});
//自定义过滤器
app.filter('cover',function () {
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未审核";
                break;
            case "CHECK":
                result = "已审核";
                break;
        }
        return result;
    }
});
//自定义过滤器
app.filter('money',function () {
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未过帐";
                break;
            case "CHECK":
                result = "已过帐";
                break;
        }
        return result;
    }
});
//自定义过滤器
app.filter('end',function () {
    return function(val){
        var result;
        switch(val){

            case "NONE":
                result = "未结帐";
                break;
            case "CHECK":
                result = "已结帐";
                break;
        }
        return result;
    }
});