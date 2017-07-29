var app = angular.module('Detail', ['toastr']);
app.controller('DetailCtrl',function($scope,applyErrSer,toastr,$stateParams) {
    var companyId = {id : $stateParams.id};
    var detailId = {applyLendId:$stateParams.id}
    applyErrSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.auditList = response.data.data;
        }
    });
     applyErrSer.auditDetailList(detailId).then(function(response){
        if(response.data.code==0){
             $scope.detailList = response.data.data;
          }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    
});
