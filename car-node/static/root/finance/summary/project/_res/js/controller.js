var app = angular.module('project', ['ng-pagination','toastr','ipCookie']);
app.controller('projectCtrl',function($scope,summarySer,toastr,ipCookie,$location){
    $scope.showtype = true;
    $scope.moreList = function(event){
        angular.forEach($scope.listproject,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.projectSum = function(){
        summarySer.listProject($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listproject = response.data.data;
                $scope.showtype = true;
            }else{
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
    $scope.projectAna = function(){
        summarySer.proAnalysis($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listanalysis = response.data.data;
                $scope.showtype = false;
            }else {
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
});