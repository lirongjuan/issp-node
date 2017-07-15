var app = angular.module('angleEdit', ['toastr','ipCookie']);
app.controller('angleEditCtrl', function($scope,$state,toastr,$stateParams,usecarSer,ipCookie,$location){

    var angleData ={id: $stateParams.id};
    usecarSer.getRecord(angleData).then(function(response){
        if(response.data.code == 0){
            $scope.editAngle = response.data.data
        }
    });

    //提交编辑
    $scope.angleEditFun = function(){
        var vm = $scope;
        usecarSer.editAngle(vm.editAngle).then(function(response){
            if(response.data.code == 0){
                $state.go('root.finance.usecar.record.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else {
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
});





