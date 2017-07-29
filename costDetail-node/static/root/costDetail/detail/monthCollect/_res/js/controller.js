var app = angular.module('monthCollect', ['toastr']);
app.controller('detailmonthCollectCtrl', function($scope, detailSer,$stateParams,$state,toastr){
  
    //所有部門
    detailSer.allGround().then(function(response){
        if(response.data.code==0){
            $scope.allGround = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //汇总点击提交
    $scope.detailEditFun = function(){
        var data = {};
        data.costTime = angular.element('.time').val();
        data.projectGroup = $scope.department;
        detailSer.monthCollect(data).then(function(response){
            if(response.data.code == 0){
                if(JSON.stringify(response.data.data) == "{}"){
                    $scope.isView = true;
                }else{
                    $scope.detailEdit = response.data.data;
                    $scope.isView = false;
                }
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});