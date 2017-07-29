var app = angular.module('cooperationPEdit', ['toastr']);
app.controller('cooperationPEditCtrl', function($scope, cooperationSer,$state,toastr,$stateParams){
    var selfcapId = {id : $stateParams.id};
    //获取值
    cooperationSer.getThreeById(selfcapId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.cooperationPEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.peditInfo.id,
            contactName:vm.peditInfo.contactName,
            sex: vm.peditInfo.sex,
            contactWay: vm.peditInfo.contactWay,
            emailName: vm.peditInfo.emailName,
            qqOrWechat: vm.peditInfo.qqOrWechat,
            natives: vm.peditInfo.natives,
            hobby: vm.peditInfo.hobby,
            charact: vm.peditInfo.charact,
            family: vm.peditInfo.family,
            familyRelation: vm.peditInfo.familyRelation,
            studyExperience: vm.peditInfo.studyExperience,
            connectExperience: vm.peditInfo.connectExperience,
            oldWorkPlace: vm.peditInfo.oldWorkPlace,
            livePlace: vm.peditInfo.livePlace,
            growthPlace: vm.peditInfo.growthPlace,
            duty: vm.peditInfo.duty,
            station: vm.peditInfo.station,
            nowCompany: vm.peditInfo.nowCompany,
            nowWorkPlace: vm.peditInfo.nowWorkPlace,
            organization: vm.peditInfo.organization,
        };
        cooperationSer.editRelation(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});