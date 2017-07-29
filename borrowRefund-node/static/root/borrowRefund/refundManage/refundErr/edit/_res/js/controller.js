var app = angular.module('refundErrEdit', ['toastr']);
app.controller('refundErreditCtrl', function($scope, refundErrSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    refundErrSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //获取三级科目
    refundErrSer.allThirdSubject().then(function(response){
            if(response.data.code == 0){
                $scope.subjects = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
       });
    //根据三级科目获取所有说明  
    $scope.sjChange = function(val){
        if(val){
            $scope.data.plainInfo = '';//清空说明
            var PlainData = {thirdSubject:val}
             refundErrSer.allPlains(PlainData).then(function(response){
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
             refundErrSer.FirstAndSecond(explainData).then(function(response){
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

    //点击提交
    $scope.EditFun =function(){
        $scope.data.estimateLendDate = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        refundErrSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.refundErr.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});
   