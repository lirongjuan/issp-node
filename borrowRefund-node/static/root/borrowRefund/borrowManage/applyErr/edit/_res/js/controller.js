var app = angular.module('applyErrEdit', ['toastr']);
app.controller('applyErreditCtrl', function($scope, applyErrSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    applyErrSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //获取三级科目
    applyErrSer.allThirdSubject().then(function(response){
            if(response.data.code == 0){
                $scope.subjects = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
       });
    //根据三级科目获取所有说明  
    $scope.sjChange = function(val){
        if(val){
            $scope.data.explains = '';//清空说明
            var PlainData = {thirdSubject:val}
             applyErrSer.allPlains(PlainData).then(function(response){
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
             applyErrSer.FirstAndSecond(explainData).then(function(response){
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
        applyErrSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.applyErr.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});
   