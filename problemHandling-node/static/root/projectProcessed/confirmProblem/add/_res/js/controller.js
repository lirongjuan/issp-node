var app = angular.module('confirmAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('confirmAddCtrl', function ($scope, confirmSer, $state, toastr) {
    //获取内部项目编号
    confirmSer.gitNum().then(function(response){
        if(response.data.code==0){
            $scope.numbers = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.changSelect = function(){
        var obj={projectNum:$scope.results.projectNum};
        confirmSer.getBiddingName(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //添加
    $scope.resultAddFun = function () {
        var vm = $scope;
        vm.results.problemAcceptTime = angular.element('.addTime').val();
        vm.results.problemOccurrenceTime = angular.element('.occurrence').val();
        vm.results.problemSolveTime = angular.element('.solution').val();
        vm.results.problemRelevantDepartment = angular.element('.po').val();
        vm.results.internalProjectName = angular.element('.na').val();
        vm.results.area = angular.element('.na2').val();
        vm.results.externalContractProjectName = angular.element('.na3').val();
        vm.results.year = angular.element('.na4').val();
        confirmSer.addResult(vm.results).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.confirmProblem.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
$scope.getSummary ={onSelectionChanged(){

    $scope.results.problemRelevantDepartment=$scope.condis.join(',');

}}


    $scope.condis= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=['财务部门-预算','财务部门-账务','财务部门-资金','综合资源部-福利','综合资源部-素养','综合资源部-规划','一线实施体系-项目组','一线实施体系-研发部','商务发展部-客户管理','商务发展部-业务管理','商务发展部-进度管理'];
    //可手填的下拉框
    // $scope.changeSelect = function () {
    //     $scope.results.projectType = $scope.results.projectType1;
    // };
    // $scope.changeSelect2 = function () {
    //     $scope.results.problemObject = $scope.results.problemObject1;
    // };

});




