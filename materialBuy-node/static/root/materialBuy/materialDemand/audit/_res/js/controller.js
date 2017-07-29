var app = angular.module('demAuditM', ['toastr']);
app.controller('demAuditCtrl', function($scope, demandSer,$stateParams,$state,toastr){
    var auditData ={id: $stateParams.id};

    //获取ID
    demandSer.findDemandId(auditData).then(function(response){
        if(response.data.code== 0){
            $scope.auditId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //审核
    $scope.demandAuditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.auditId.id,
            auditState: vm.auditId.auditState,
            auditOpinion: vm.auditId.auditOpinion
        };
        demandSer.auditDemand(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialDemand.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




