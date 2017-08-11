var app = angular.module('liabilityEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('liabilityEditCtrl', function($scope,$state,$stateParams,toastr,liabilitySer){

    var getId = {id:$stateParams.id};
    liabilitySer.getliab(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.liabEditFun = function(){
        liabilitySer.editliab($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.hand.liability.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





