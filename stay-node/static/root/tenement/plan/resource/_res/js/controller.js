var app = angular.module('planResource', ['toastr','ipCookie']);
app.controller('planResourceCtrl', function($scope,$state,toastr,planSer,$stateParams){
    var getId = {id:$stateParams.id};
    planSer.getPlan(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.ResourceFun = function(){
        planSer.aduitResource($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.plan.list[12]');
                toastr.success("综合资源部已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


