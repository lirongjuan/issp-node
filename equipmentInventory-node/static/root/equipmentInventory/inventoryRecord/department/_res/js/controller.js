var app = angular.module('recordDepM', ['ng-pagination','toastr']);
app.controller('recordDepCtrl',function($scope,inRecordSer,toastr){
            inRecordSer.recordDep().then(function(response){
                if(response.data.code == 0){
                    $scope.recordDeps = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
});

