var app = angular.module('basicinfoEdit', ['toastr','ipCookie']);
app.controller('basicinfoEditCtrl', function($scope, basicinfoSer,$stateParams,$state,toastr,ipCookie,$location){
    var editData ={id: $stateParams.id};
    //获取所有地区
    basicinfoSer.getAreas().then(function(response){
        if(response.data.code==0){
            $scope.AreasInfo= response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的供应商类型
    basicinfoSer.getsuType().then(function(response){
        if(response.data.code==0){
            $scope.TypeInfo= response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取ID
    basicinfoSer.editBasicInfoById(editData).then(function(response){
        if(response.data.code=='0'){
            $scope.editBasicInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        basicinfoSer.basicInfoEdit(vm.editBasicInfo).then(function(response){
               if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                   toastr.error( response.data.msg, '温馨提示');
               }
        });
    };
});





