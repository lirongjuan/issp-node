var app = angular.module('month', ['ng-pagination','toastr','ipCookie']);
app.controller('monthCtrl',function($scope,summarySer,toastr,ipCookie,$location){

    $scope.moreList = function(event){
        angular.forEach($scope.listmonth,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.mouthSum = function(){

      month($scope.collect)
    };
        function month(data){
            summarySer.listMonth(data).then(function(response){
                if(response.data.code==0){
                    $scope.listmonth = response.data.data;
                }else{
                    toastr.error(response.data.msg,"温馨提示");
                }
            });
        }
    month()

})
;


