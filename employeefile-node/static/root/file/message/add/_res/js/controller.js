var app = angular.module('messageAdd', ['toastr']);
app.controller('messageAddCtrl', function($scope, messageSer,$state,toastr){
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
    $scope.messageAddFun = function(){
        var vm = $scope;
        vm.add.entry = angular.element('.entry').val();
        vm.add.graduate = angular.element('.graduate').val();
        vm.add.birth = angular.element('.birth').val();
        messageSer.addMessage(vm.add).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.file.message.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
