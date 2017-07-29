var app = angular.module('handoverEdit', ['toastr']);
app.controller('handoverEditCtrl', function($scope, handoverSer,$stateParams,$state,toastr){
    $scope.showed=true
    var handoverData ={id: $stateParams.id};
    //获取ID
    handoverSer.handoverId(handoverData).then(function(response){
        if(response.data.code==0){
            $scope.handover = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.handEditFun = function(){
        var vm = $scope;
        
        handoverSer.handoverEdit(vm.handover).then(function(response){
            if(response.data.code == 0){
                $state.go('root.leave.handover.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





