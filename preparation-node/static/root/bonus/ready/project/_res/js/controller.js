var app = angular.module('readyProject', ['toastr','angularjs-dropdown-multiselect']);
app.controller('readyProjectCtrl', function($scope, readySer,toastr){
    //获取公司
    readySer.getProjectNames().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.projectGroup = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.collect = function(){
        var data = {
            years:$scope.years,
            month:$scope.month,
            projectGroup:$scope.projectGroup
        };
        readySer.projectReady(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





