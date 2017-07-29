var app = angular.module('socialAdd', ['toastr']);
app.controller('socialAddCtrl', function($scope, socialSer,$state,toastr){
    $scope.socialAddFun = function(){
        var vm = $scope;
        socialSer.addSocial(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.social.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





