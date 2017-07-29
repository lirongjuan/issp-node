var app = angular.module('emailEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailEditCtrl', function($scope, emailSer,$state,toastr,$stateParams){
    var emailId = {id : $stateParams.id};
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取值
    emailSer.getFourById(emailId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
            $scope.condis = $scope.editInfo.companyOrName.split(',');
            $scope.objLists = $scope.editInfo.sendObject.split(';');
            $scope.condis.reUndefined();
            $scope.objLists.reUndefined();
            $scope.myFunc(false);
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.myFunc = function(bol) {
        var type={type:$scope.editInfo.type};
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
                if (bol) $scope.condis = [];
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.condis= [];
    $scope.objLists = [];
    $scope.addMails = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    $scope.emails = ['个人邮箱','公邮','自由录入'];
    $scope.emaiIdEditFun = function(){
        var vm = $scope;
        vm.editInfo.companyOrNames = $scope.condis;
        vm.editInfo.sendObjectList = $scope.objLists;
        emailSer.editEmail(vm.editInfo).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.ability.email.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});