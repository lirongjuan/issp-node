var app = angular.module('demandEdit', ['toastr']);
app.controller('demandEditCtrl', function($scope, demandSer,$stateParams,$state,toastr){
    var discussData ={id: $stateParams.id};
    //获取ID
    demandSer.findDemandId(discussData).then(function(response){
        if(response.data.code==0){
            $scope.editDemand = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        vm.editDemand.startProjectTime = angular.element('.addTime').val();
        vm.editDemand.endProjectTime = angular.element('.endTime').val();
        demandSer.editMaterial(vm.editDemand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialDemand.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





