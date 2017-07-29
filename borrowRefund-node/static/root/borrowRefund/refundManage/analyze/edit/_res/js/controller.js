var app = angular.module('analyzeEdit', ['toastr']);
app.controller('analyzeEditCtrl', function($scope, analyzeSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    analyzeSer.allLisisor().then(function(response){
        if(response.data.code == 0){
            $scope.allLisisor = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取id对应的数据
    analyzeSer.getById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.editFun = function(){
        for(var i = 0;i < $scope.allLisisor.length;i++){
            if($scope.data.empNum == $scope.allLisisor[i].username){
                var username = $scope.allLisisor[i].employeeNumber;
                break;
            }
        }
        var data = {
            remark:$scope.remark,
            empNum:username
        }
        analyzeSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.analyze.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});



