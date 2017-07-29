var app = angular.module('emailAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){
    $scope.myFunc = function() {
        var type={type:$scope.type};
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.condis= [];
    $scope.objLists = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.addMails = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    $scope.emails = ['个人邮箱','公邮','自由录入'];
    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = {
            type: vm.type,
            companyOrNames: vm.condis,
            remark: vm.remark,
            sendNum: vm.sendNum,
            collectSendUnit:vm.collectSendUnit,
            collectUnit: vm.collectUnit,
            status: vm.status,
            sendObjectList: vm.objLists,
           };
        emailSer.addEmail(data).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.ability.email.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});





