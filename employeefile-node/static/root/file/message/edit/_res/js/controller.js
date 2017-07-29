var app = angular.module('messageEdit', ['toastr']);
app.controller('messageEditCtrl', function($scope, messageSer,$state,toastr,$stateParams){
    var messId = {id : $stateParams.id};
    messageSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    messageSer.informMessage().then(function(response){
        if(response.data.code == 0){
            $scope.infromData = response.data.data;
        }
    });
    //获取值
    messageSer.getOneById(messId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.messageEditFun = function(){
        var vm = $scope;
        messageSer.editMessage(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.message.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});