var app = angular.module('standardCollect', ['toastr','ipCookie']);
app.controller('standardCollectCtrl', function($scope,$state,toastr,standardSer,ipCookie,$location){

    $scope.search={};
    $scope.collect = function(){
      /*  var vm = $scope;
        var data={
            area:vm.area,
            customerName:vm.customerName,
            startDate:angular.element('.startDate').val(),
            endDate:angular.element('.endDate').val()
        };*/
        $scope.search.date=angular.element('.searchtime').val();
        standardSer.collectStandard($scope.search).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

   /* standardSer.collectStandard().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })*/
});





