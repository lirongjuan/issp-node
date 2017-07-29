var app = angular.module('auditDetail', ['toastr']);
app.controller('auditDetailCtrl',function($scope,waitAuditSer,toastr,$stateParams) {
    var companyId = {id : $stateParams.id};
    waitAuditSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.auditList = response.data.data;
        }
    });

    //职位列表
    var detailId = {applyLendId:$stateParams.id};
     waitAuditSer.auditDetailList(detailId).then(function(response){
        if(response.data.code==0){
             $scope.detailList = response.data.data;
          }else{
              toastr.error('获取列表失败','温馨提示')
         }
    });
    
});
