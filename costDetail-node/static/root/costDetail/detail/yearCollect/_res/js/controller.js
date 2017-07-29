var app = angular.module('detailyearCollect', ['toastr']);
app.controller('detailyearCollectCtrl', function($scope, detailSer,$state,toastr){
   
  
    //编辑点击提交
    $scope.detailEditFun = function(){
        var data = {};
        data.years = angular.element('.time').val();
        detailSer.yearCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.data = response.data.data;
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});


