var app = angular.module('meansEdit', ['toastr']);
app.controller('meansEditCtrl', function($scope, meansSer,$state,toastr,$stateParams,$filter){
    var meansId = {id : $stateParams.id};
    //获取值
    meansSer.meansId(meansId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.meansEditFun = function(){
        var data = $scope.data;
        meansSer.meansEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.means.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});