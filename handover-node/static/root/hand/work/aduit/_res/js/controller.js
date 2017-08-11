var app = angular.module('workAduit', ['toastr','ipCookie']);
app.controller('workAduitCtrl', function($scope,$state,toastr,workSer,$stateParams){
    var getId = {id:$stateParams.id};
    workSer.getWork(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.aduitFun = function(){
        workSer.aduitWork($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.work.list[12]');
                toastr.success("已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


