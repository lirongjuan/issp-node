var app = angular.module('auditDetail', ['toastr']);
app.controller('auditDetailCtrl',function($scope,applyRecordSer,toastr,$stateParams) {
    var companyId = {id : $stateParams.id};
    applyRecordSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    var companyId1 = {applyLendId : $stateParams.id};
     applyRecordSer.auditDetailList(companyId1).then(function(response){
        if(response.data.code==0){
             $scope.detailList = response.data.data;
          }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    
});
