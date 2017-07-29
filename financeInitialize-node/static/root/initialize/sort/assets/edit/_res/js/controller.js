var app = angular.module('assetsEdit', ['toastr']);
app.controller('currenyEditCtrl', function($scope, assetsSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    assetsSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.data.firstSubjectName = $scope.data.firstSubjectVO.name;
            var firstData = {
                categoryName:'ASSETS'
            }
            //获取一级列表
            assetsSer.firstList(firstData).then(function(response){
                if(response.data.code == 0){
                        $scope.firstList = response.data.data;
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
            })
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.startTime = angular.element('.startTiming').val();//开始时间
        var data = $scope.data;
        data.id = companyId.id;;
        assetsSer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.assets.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   