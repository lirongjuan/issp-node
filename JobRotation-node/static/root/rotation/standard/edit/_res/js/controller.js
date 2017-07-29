var app = angular.module('standardEdit', ['toastr']);
app.controller('standardEditCtrl', function($scope, standSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    //获取ID
    standSer.standId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.stand = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.standardEditFun = function(){
        var vm = $scope;
        //只取两位小数
        vm.stand.standard = Number($scope.stand.standard).toFixed(2);
        standSer.standEdit(vm.stand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.standard.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





