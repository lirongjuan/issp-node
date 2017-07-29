var app = angular.module('demandViewM', ['ng-pagination','toastr']);
app.controller('demandViewCtrl',function($scope,demandSer,toastr,$stateParams){
        var listData = {
            id:$stateParams.id
        };
        demandSer.demandViewList(listData).then(function(response){

            if(response.data.code == 0){
                $scope.demandViewLists = response.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.demandViewLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };


});

