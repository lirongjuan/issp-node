var app = angular.module('obligationsEdit', ['toastr']);
app.controller('obligationsEditCtrl', function($scope, obligationsSer,$state,toastr,$stateParams,$filter){
    var obligationsId = {id : $stateParams.id};
    //获取值
    obligationsSer.obligationsId(obligationsId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.obligationsEditFun = function(){
     
        var t =  angular.element('.yon').val();
        var data = $scope.data;
        data.object=t;
        
        obligationsSer.obligationsEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.obligations.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});