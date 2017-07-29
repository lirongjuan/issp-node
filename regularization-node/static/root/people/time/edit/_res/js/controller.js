var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, timeSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    timeSer.timeId(webData).then(function(response){
        if(response.data.code==0){
            $scope.time = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.timeEditFun = function(){
        var vm = $scope;
        timeSer.timeEdit(vm.time).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.time.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





