var app = angular.module('confirmEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('confirmEditCtrl', function($scope, confirmSer,$stateParams,$state,toastr){
    var confirmData ={id: $stateParams.id};
    //获取内部项目编号
    confirmSer.gitNum().then(function(response){
        if(response.data.code==0){
            $scope.numbers = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.changSelect = function(){
        var obj={projectNum:$scope.resultEdit.projectNum};
        confirmSer.getBiddingName(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //获取ID
    confirmSer.findResultId(confirmData).then(function(response){
        if(response.data.code== 0){
            $scope.resultEdit = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.problemEditFun = function(){
        var vm = $scope;

        vm.resultEdit.problemRelevantDepartment = angular.element('.po').val();
        vm.resultEdit.internalProjectName = angular.element('.na').val();
        confirmSer.editResult(vm.resultEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.confirmProblem.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    $scope.getSummary ={onSelectionChanged(){

    $scope.resultEdit.problemRelevantDepartment=$scope.condis.join(',');

}}


    $scope.condis= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['财务部门-预算','财务部门-账务','财务部门-资金','综合资源部-福利','综合资源部-素养','综合资源部-规划','一线实施体系-项目组','一线实施体系-研发部','商务发展部-客户管理','商务发展部-业务管理','商务发展部-进度管理'];


});





