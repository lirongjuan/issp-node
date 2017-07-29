var app = angular.module('classifyEdit', ['toastr']);
app.controller('classifyEditCtrl', function($scope, classifySer,toastr){

    $scope.changeFn = function(val){
        if(val){
            var data = {parNode:val}
            classifySer.findTypeName(data).then(function(response){
                if(response.data.code == 0){
                    $scope.typeNameArr = response.data.data;
                }else {
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        }
    }

    $scope.typeNameChange = function(val){
        if(val){
            for(var i=0;i < $scope.typeNameArr.length;i++){
                if(val == $scope.typeNameArr[i].id){
                    $scope.data.typeName = $scope.typeNameArr[i].typeName;
                }
            }
        }
    }

    $scope.editFun = function(){
        var data = $scope.data;
        classifySer.addclassify(data).then(function(response){
            if(response.data.code == 0){
                toastr.success("已成功编辑", '温馨提示');
                $state.go('root.costDetail.classify.edit[12]');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});



