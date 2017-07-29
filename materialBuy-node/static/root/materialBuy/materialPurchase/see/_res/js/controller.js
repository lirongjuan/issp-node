var app = angular.module('purchaseSeeM', ['ng-pagination','toastr']);
app.controller('purchaseSeeCtrl',function($scope,purchaseSer,toastr,$stateParams,$state,$location){
    var listData = {
        id:$stateParams.id
    };
    purchaseSer.purSeeList(listData).then(function(response){
        if(response.data.code == 0){
            $scope.purSeeLists = response.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.purSeeLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

});

