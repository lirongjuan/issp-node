var app = angular.module('deparEditDeparture', ['toastr']);
app.controller('deparEditDepartureCtrl', function($scope, deparSer,$stateParams,$state,toastr){
    $scope.showed=true
    var deparData ={id: $stateParams.id};
    //获取ID
    deparSer.deparId(deparData).then(function(response){
        if(response.data.code==0){
            $scope.depar = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.deparEditFun = function(){
        var vm = $scope;
        deparSer.deparEditDeparture(vm.depar).then(function(response){
            if(response.data.code == 0){
                $state.go('root.leave.departure.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





