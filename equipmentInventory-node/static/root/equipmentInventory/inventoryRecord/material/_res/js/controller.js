var app = angular.module('recordMatM', ['ng-pagination','toastr']);
app.controller('recordMatCtrl',function($scope,inRecordSer,toastr){
            inRecordSer.recordMat().then(function(response){
                if(response.data.code == 0){
                    $scope.recordMats = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
});

