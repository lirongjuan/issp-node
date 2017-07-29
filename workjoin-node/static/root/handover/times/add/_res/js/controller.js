var app = angular.module('timesAdd', ['toastr']);
app.controller('timesAddCtrl', function($scope, timesSer,$state,toastr){
    //添加
    $scope.timesAddFun = function(){
        var t =  angular.element('.yon').val();
        var data = $scope.data;
        data.object=t;
      
        timesSer.timesAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.times.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





