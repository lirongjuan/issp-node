var app = angular.module('voucherRecords', [{
    files:[
        "root/recordAccount/voucherRecords/_res/js/service.js",
    ]
}]);
app.controller('voucherRecordsCtrl',function ($scope,$state) {
    if ($state.current.url == '/voucherRecords') {//默认加载列表
        $state.go('root.recordAccount.voucherRecords.list[12]')
    }

}).controller('voucherRecordsMenuCtrl',function($scope,$state,$rootScope,$location,voucherRecordsSer){
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
        voucherRecordsSer.menuPermission(buttonName).then(function(response){
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
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.recordAccount.voucherRecords.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.recordAccount.voucherRecords.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
    $scope.subjectsSummary = function(){
        $scope.menuClass = 'subjectsSummaryMenu';
        $scope.idListd = ''
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu';
        $scope.idListd = ''
    };
    $scope.teamSummary = function(){
        $scope.menuClass = 'teamSummaryMenu';
        $scope.idListd = ''
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu';
        $scope.idListd = ''
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