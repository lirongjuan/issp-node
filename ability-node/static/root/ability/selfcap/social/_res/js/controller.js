var app = angular.module('socialPAdd', ['toastr']);
app.controller('socialPAddCtrl', function($scope, selfcapSer,$state,toastr,$stateParams){
    var selfcapId = {id : $stateParams.id};
    //获取值
    selfcapSer.getTwoById(selfcapId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selfcapAddFun = function(){
        var vm = $scope;
        var data = {
            selfCapabilityId:vm.peditInfo.id,
            contactName: vm.peditInfo.contactName2,
            family: vm.peditInfo.family2,
            sex: vm.peditInfo.sex2,
            contactWay: vm.peditInfo.contactWay2,
            emailName: vm.peditInfo.emailName2,
            qqOrWechat: vm.peditInfo.qqOrWechat2,
            natives: vm.peditInfo.natives2,
            hobby: vm.peditInfo.hobby2,
            charact: vm.peditInfo.charact2,
            familyRelation: vm.peditInfo.familyRelation2,
            studyExperience: vm.peditInfo.studyExperience2,
            connectExperience: vm.peditInfo.connectExperience2,
            oldWorkPlace: vm.peditInfo.oldWorkPlace2,
            livePlace: vm.peditInfo.livePlace2,
            growthPlace: vm.peditInfo.growthPlace2,
            organization: vm.peditInfo.organization,
            nowWorkPlace: vm.peditInfo.nowWorkPlace,
            nowCompany: vm.peditInfo.nowCompany,
            station: vm.peditInfo.station,
            duty: vm.peditInfo.duty,
        };
        selfcapSer.addSocialSelf(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.socialList[12]',{id:$stateParams.id});
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});