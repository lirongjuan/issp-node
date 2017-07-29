var app = angular.module('analyzeAdd', ['toastr']);
app.controller('analyzeAddCtrl', function($scope, analyzeSer,$state,toastr){
    analyzeSer.allLisisor().then(function(response){
        if(response.data.code == 0){
            $scope.allLisisor = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.addFun = function(){
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
        analyzeSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.analyze.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});



