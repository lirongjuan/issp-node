var app = angular.module('manageAudit', ['toastr']);
app.controller('manageAuditCtrl', function($scope, waitAuditSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取列表
    waitAuditSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            if($scope.data.managerPass == '否'){
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
              toastr.error('获取列表失败','温馨提示')
         }
    });
    $scope.isClick = true;
    $scope.whether = function(){
        $scope.isNo = !$scope.isNo;
        $scope.isClick = false;
        if($scope.isNo){
            $scope.data.managerPass = '否';
        }else{
            $scope.data.managerPass = '是';
        }
    }
    //点击提交
    $scope.EditFun =function(){
        if($scope.isClick){
            return;
        }
        var data = $scope.data;
        data.id = companyId.id;
        waitAuditSer.listLendAudit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.waitAudit.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   