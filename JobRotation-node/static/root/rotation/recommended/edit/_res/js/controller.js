var app = angular.module('recomEdit', ['toastr']);
app.controller('recomEditCtrl', function($scope, recomSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    recomSer.gitName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });
    recomSer.gitLevel().then(function(response){
        if(response.data.code == 0){
            $scope.applyLevelIds = response.data.data;
        }
    });
    //获取ID
    recomSer.recomId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.recom = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.recomEditFun = function(){
        var vm = $scope;
        vm.recom.username = angular.element('.na').val();
        vm.recom.applyLevelId = angular.element('.le').val();
        recomSer.recomEdit(vm.recom).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.recommended.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





