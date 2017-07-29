var app = angular.module('detailEdit', ['toastr']);
app.controller('detailEditCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    detailSer.idByDetail().then(function(response){
        if(response.data.code == 0){
            $scope.idData = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    var basicData ={id: $stateParams.id};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //编辑点击提交
    $scope.detailEditFun = function(){
        var vm = $scope;
        vm.editInfo.finishTime=angular.element('.finishTime').val();
        vm.editInfo.checkTime=angular.element('.checkTime').val();
        vm.editInfo.auditTime=angular.element('.auditTime').val();
        vm.editInfo.countTime=angular.element('.countTime').val();
        vm.editInfo.billTime=angular.element('.billTime').val();
        vm.editInfo.planTime=angular.element('.planTime').val();
        vm.editInfo.accountTime=angular.element('.accountTime').val();
        detailSer.editDetail(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payment.detail.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





