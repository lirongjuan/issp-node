var app = angular.module('contractorEdit', ['toastr']);
app.controller('contractorEditCtrl', function($scope, contractorSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    contractorSer.findContractorId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //编辑点击提交
    $scope.contractorEditFun = function(){
        var vm = $scope;
        vm.editInfo.creationTime=angular.element('.creationTime').val();
        contractorSer.editContractor(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payment.contractor.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





