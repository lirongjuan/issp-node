var app = angular.module('applypManager', ['toastr']);
app.controller('applypManagerCtrl', function($scope, applySer,$state,toastr,$stateParams){
    var applyData ={id: $stateParams.id};
    //添加
    $scope.applypManagerFun = function(){
        var data = $scope.apply;
        data.id  = applyData.id;
        applySer.projectManager(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.promoteManage.apply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});




