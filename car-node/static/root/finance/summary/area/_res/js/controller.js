var app = angular.module('area', ['ng-pagination','toastr','ipCookie']);
app.controller('areaCtrl',function($scope,summarySer,toastr,ipCookie,$location){
    $scope.areatype=true;
    $scope.moreList = function(event){
        angular.forEach($scope.listarea,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.areaSum = function(){
        summarySer.listArea($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.listarea = response.data.data;
                $scope.areatype=true;
            }else{
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
    $scope.areaAna = function(){
        summarySer.areaAna($scope.collect).then(function(response){
            if(response.data.code==0){
                $scope.areaanalyze = response.data.data;
                $scope.areatype=false;
            }else{
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    };
});