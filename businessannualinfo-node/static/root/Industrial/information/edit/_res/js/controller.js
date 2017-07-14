var app = angular.module('informationEdit', ['toastr']);
app.controller('informationEditCtrl', function($scope, informationSer,$state,toastr,$stateParams){
    var informationId = {id : $stateParams.id};
    //获取值
    informationSer.annualOne(informationId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.informationEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        var y =  angular.element('.state').val();
        data.submitDate=d;
        data.status=y;
        
        informationSer.annualEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.Industrial.information.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});