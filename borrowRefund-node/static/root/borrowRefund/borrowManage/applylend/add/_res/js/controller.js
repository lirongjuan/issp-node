var app = angular.module('applylendAdd', ['toastr']);
app.controller('applylendAddCtrl', function($scope, applylendSer,$state,toastr){

    //获取三级科目
    applylendSer.allThirdSubject().then(function(response){
            if(response.data.code == 0){
                $scope.subjects = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
       });
    //根据三级科目获取所有说明  
    $scope.sjChange = function(val){
        if(val){
            var PlainData = {thirdSubject:val}
             applylendSer.allPlains(PlainData).then(function(response){
                if(response.data.code == 0){
                    $scope.PlainsList = response.data.data;
                    if($scope.data){
                        $scope.data.firstSubject = " ";
                        $scope.data.secondSubject = " ";
                    }
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
             });
        }
        
    }
    //获取一级二级科目
    $scope.explainFn = function(val){
        if(val && $scope.data.thirdSubject){
            var explainData = {
                thirdSubject:$scope.data.thirdSubject,
                plainInfo:val
            }
             applylendSer.FirstAndSecond(explainData).then(function(response){
                if(response.data.code == 0){
                    $scope.FS = response.data.data[0];
                    $scope.data.firstSubject = $scope.FS.firstSubjectBO.name;
                    $scope.data.secondSubject = $scope.FS.secondSubject;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
             });
        }
    }
    $scope.AddFun = function(){
        $scope.data.estimateLendDate = angular.element('.start').val();
        var data = $scope.data;
        applylendSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.applylend.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});



