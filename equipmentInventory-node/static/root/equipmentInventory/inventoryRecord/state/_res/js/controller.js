var app = angular.module('recordStateM', ['ng-pagination','toastr']);
app.controller('recordStareCtrl',function($scope,inRecordSer,toastr){
            inRecordSer.recordState().then(function(response){
                if(response.data.code == 0){
                    $scope.recordStates = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
});

