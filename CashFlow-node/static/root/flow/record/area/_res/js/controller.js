var app = angular.module('recordArea', ['toastr']);
app.controller('recordAreaCtrl', function($scope, recordSer,toastr){

    $scope.showed=true;
    // 地区
    recordSer.areas().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;

        }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
            // area:data.area
        };
        recordSer.moneyArea(data.sum).then(function(response){
            if(response.data.code == 0){
                if( data.sum.year == undefined || data.sum.year == '' || data.sum.month == undefined || data.sum.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.recordLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




