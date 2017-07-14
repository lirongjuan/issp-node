var app = angular.module('summary', [{
    files:[
        "root/processing/summary/_res/js/service.js"
    ]
}]);
app.controller('summaryCtrl',function ($scope,$state) {
    if ($state.current.url == '/summary') {
        $state.go('root.processing.summary.departmentSummary');
    }
}).controller('summaryMenuCtrl',function($scope,$state,$rootScope,$location,summarySer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='departmentSummary'){
            $scope.menuClass = 'departmentSummaryMenu';
        }
    });
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        summarySer.summaryPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    // $scope.list = function(){
    //     $scope.menuClass = 'listMenu'
    // };
    $scope.areasAnalyze = function(){
        $scope.menuClass = 'areasAnalyzeMenu'
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu'
    };
    $scope.oneSummary = function(){
        $scope.menuClass = 'oneSummaryMenu'
    };
    $scope.departmentSummary = function(){
        $scope.menuClass = 'departmentSummaryMenu'
    };
    $scope.departmentAnalyze = function(){
        $scope.menuClass = 'departmentAnalyzeMenu'
    };
    $scope.oneAnalyze = function(){
        $scope.menuClass = 'oneAnalyzeMenu'
    };
});
