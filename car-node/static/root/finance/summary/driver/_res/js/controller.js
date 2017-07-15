var app = angular.module('driver', ['ng-pagination','toastr','ipCookie']);
app.controller('driverCtrl',function($scope,summarySer,toastr,ipCookie,$location){
    $scope.showtype = true;
    $scope.moreList = function(event){
        angular.forEach($scope.listdriver,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.driverSum = function(){
        summarySer.listDriver($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listdriver = response.data.data;
                $scope.showtype = true;
            }else{
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
    $scope.driverAna = function(){
        summarySer.driAnalysis($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listanalysis = response.data.data;
                $scope.showtype = false;
            }else {
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
});