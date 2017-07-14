var app = angular.module('informationAdd', ['toastr']);
app.controller('informationAddCtrl', function($scope, informationSer,$state,toastr){

    //添加个人能力
    $scope.informationAddFun = function(){
        var d =  angular.element('.time').val();
        var y =  angular.element('.state').val();
        var data = $scope.data;
        data.submitDate=d;
        data.status=y;
        informationSer.annualAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.Industrial.information.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





