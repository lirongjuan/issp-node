var app = angular.module('recordAreaM', ['ng-pagination','toastr']);
app.controller('recordAreaCtrl',function($scope,inRecordSer,toastr){
    inRecordSer.recordArea().then(function(response){
        if(response.data.code == 0){
            $scope.recordAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

});

