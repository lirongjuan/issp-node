var app = angular.module('summary', [{
    files:[
        "root/finance/summary/_res/js/service.js"
    ]
}]);
app.controller('summaryCtrl',function ($scope,$state) {

    if ($state.current.url == '/summary') {//默认加载列表
        $state.go('root.finance.summary.week[12]')
    };

}).controller('summaryMenuCtrl',function($scope,$state,$rootScope,$location,summarySer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] ;
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name){
        var buttonName = name;
        $scope.buttonShow = true;
        summarySer.menuPermission(buttonName).then(function(response){

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
    //周汇总
    $scope.week = function(){
        $scope.menuClass = 'weekMenu';
        $scope.getId = ''
    };
    //月汇总
    $scope.month = function(){
        $scope.menuClass = 'monthMenu';
        $scope.getId = ''
    };
    //项目汇总
    $scope.project = function(){
        $scope.menuClass = 'projectMenu';
        $scope.getId = ''
    };
    //地区汇总
    $scope.area = function(){
        $scope.menuClass = 'areaMenu';
        $scope.getId = ''
    };
    //司机汇总
    $scope.driver = function(){
        $scope.menuClass = 'driverMenu';
        $scope.getId = ''
    };
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "MAIN":
                result = "主营业务成本";
                break;
            case "MARKET":
                result = "市场费";
                break;
            case "TRAINING":
                result = "培训费";
                break;

            case "WEEK":
                result = "周汇总";
                break;
            case "MONTH":
                result = "月汇总";
                break;
            case "AREACOLLECT":
                result = "地区汇总";
                break;
            case "GROUPCOLLECT":
                result = "项目组汇总";
                break;
            case "DRIVERCOLLECT":
                result = "司机汇总";
                break;
        }
        return result;
    }
})

