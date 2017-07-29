var app = angular.module('chargerAudit', ['toastr']);
app.controller('chargerAuditCtrl', function($scope, rwaitAuditSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取列表
    rwaitAuditSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            if($scope.data.chargerAuditStatus == '不通过'){
                $scope.isNo = true;
            }
        }
    });
    //审核人员列表
    var detailId = {applyLendId:$stateParams.id};
     rwaitAuditSer.auditDetailList(detailId).then(function(response){
        if(response.data.code==0){
             $scope.detailList = response.data.data;
          }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    $scope.isClick = true;
    $scope.whether = function(){
        $scope.isNo = !$scope.isNo;
        $scope.isClick = false;
        if($scope.isNo){
            $scope.data.chargerAuditStatus = '不通过';
        }else{
            $scope.data.chargerAuditStatus = '通过';
        }
    }
    //点击提交
    $scope.EditFun =function(){
        if($scope.isClick){
            return;
        }
        var data = $scope.data;
        data.id = companyId.id;
        rwaitAuditSer.chargerAudit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.rwaitAudit.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   