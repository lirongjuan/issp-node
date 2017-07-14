var app = angular.module('recordAnalyze', ['toastr']);
app.controller('recordAnalyzeCtrl', function($scope, recordSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    recordSer.moneyAnalyze().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            // startTime:angular.element('.start').val(),
            // endTime:angular.element('.end').val(),
            year:data.year,
            month:data.month,
            area:data.area,
            projectGroup:data.projectGroup,
            project:data.project
        };
        recordSer.moneyAnalyze(data.sum).then(function(response){
            if(response.data.code == 0){
                if( data.sum.year == undefined || data.sum.year == '' || data.sum.month == undefined || data.sum.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.recordLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };

});




