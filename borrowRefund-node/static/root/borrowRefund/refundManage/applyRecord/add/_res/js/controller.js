var app = angular.module('applyRecordAdd', ['toastr']);
app.controller('applyRecordAddCtrl', function($scope, applyRecordSer,$state,toastr){

    //获取三级科目
    applyRecordSer.allThirdSubject().then(function(response){
            if(response.data.code == 0){
                $scope.subjects = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
       });
    //根据三级科目获取所有说明  
    $scope.sjChange = function(val){
        if(val){
            $scope.data.plainInfo = '';
            var PlainData = {thirdSubject:val}
             applyRecordSer.allPlains(PlainData).then(function(response){
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
             applyRecordSer.FirstAndSecond(explainData).then(function(response){
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
        $scope.data.occureDate = angular.element('.time').val();
        var data = $scope.data;
        applyRecordSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.applyRecord.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});



