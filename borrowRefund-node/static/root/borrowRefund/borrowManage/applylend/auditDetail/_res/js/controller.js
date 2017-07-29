var app = angular.module('auditDetail', ['toastr']);
app.controller('auditDetailCtrl',function($scope,applylendSer,toastr,$stateParams) {
    var companyId = {id : $stateParams.id};
    applylendSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.auditList = response.data.data;
        }
    });
     applylendSer.auditDetailList(companyId).then(function(response){
        if(response.data.code==0){
             $scope.detailList = response.data.data;
          }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    
});
