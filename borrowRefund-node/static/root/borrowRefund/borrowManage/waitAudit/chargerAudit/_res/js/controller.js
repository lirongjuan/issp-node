var app = angular.module('chargerAudit', ['toastr']);
app.controller('chargerAuditCtrl', function($scope, waitAuditSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取列表
    waitAuditSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            if($scope.data.chargerPass == '否'){
                $scope.isNo = true;
            }
        }
    });
    //审核人员列表
    var detailId = {applyLendId:$stateParams.id};
     waitAuditSer.auditDetailList(detailId).then(function(response){
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
            $scope.data.chargerPass = '否';
        }else{
            $scope.data.chargerPass = '是';
        }
    }
    //点击提交
    $scope.EditFun =function(){
        if($scope.isClick){
            return;
        }
        var data = $scope.data;
        data.id = companyId.id;
        waitAuditSer.chargerAudit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.waitAudit.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   