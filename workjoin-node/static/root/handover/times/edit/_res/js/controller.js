var app = angular.module('timesEdit', ['toastr']);
app.controller('timesEditCtrl', function($scope, timesSer,$state,toastr,$stateParams,$filter){
    var timesId = {id : $stateParams.id};
    //获取值
    timesSer.timesId(timesId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.timesEditFun = function(){
     
        var t =  angular.element('.yon').val();
        var data = $scope.data;
        data.object=t;

        timesSer.timesEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.times.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});