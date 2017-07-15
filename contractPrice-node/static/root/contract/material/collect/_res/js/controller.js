var app = angular.module('materialCollect', ['toastr','ipCookie']);
app.controller('materialCollectCtrl', function($scope,$state,toastr,materialSer,$location,ipCookie){

    $scope.collect = function(){
        var vm = $scope;
        var data={
            area:vm.area,
            customerName:vm.customerName,
            startDate:angular.element('.startDate').val(),
            endDate:angular.element('.endDate').val()
        };
        materialSer.collectMaterial(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





