var app = angular.module('areasSummary', ['toastr']);
app.controller('areasSummaryCtrl', function($scope, summarySer,toastr){

    $scope.showed=true;
    // 获取所有地区
    summarySer.areasList().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            year:angular.element('.year').val(),
            month:angular.element('.month').val(),
            area:vm.area
        };
        summarySer.areasSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //查寻更多
    $scope.moreList = function(event){
        angular.forEach($scope.registeredLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

});




