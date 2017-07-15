var app = angular.module('recordAdd', ['toastr','ipCookie']);
app.controller('recordAddCtrl', function($scope,$state,toastr,ipCookie,$location,usecarSer){

    $scope.angleAddFun = function(){
        var vm = $scope;
        usecarSer.addAngle(vm.Add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.finance.usecar.record.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
});





