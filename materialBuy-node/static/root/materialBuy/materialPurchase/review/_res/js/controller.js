var app = angular.module('purchaseReview', ['toastr']);
app.controller('purchaseReviewCtrl', function($scope, purchaseSer,$stateParams,$state,toastr){
    var auditData ={id: $stateParams.id};
    //获取ID
    purchaseSer.findPurchaseId(auditData).then(function(response){
        if(response.data.code== 0){
            $scope.auditId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //审核
    $scope.purchaseAuditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.auditId.id,
            auditState: vm.auditId.auditState,
            auditOpinion: vm.auditId.auditOpinion
        };
        purchaseSer.reviewPurchase(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialPurchase.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




