var app = angular.module('recordMonthAll', ['toastr']);
app.controller('recordMonthAllCtrl', function($scope, recordSer,toastr){


    //查询事件
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
        };
        
        recordSer.moneyMonthAll(data.sum).then(function(response){
            
            if(response.data.code == 0){
                $scope.recordLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




