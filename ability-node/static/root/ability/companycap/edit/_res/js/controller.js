var app = angular.module('companyEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('companyEditCtrl', function($scope, companycapSer,$state,toastr,$stateParams){
    $scope.modelOptions = ['电信工程专业承包企业资质','通信工程施工总承包企业资质','通信息系网络系统集成企业资质','电子通信广电行业的工程设计资质','通信信息专业工程咨询资质'];
    $scope.modelOptions2 = ['9000族质量管理体系或同类认证','14000族环境管理体系认证证书','建筑业企业资质证书'];
    $scope.modelOptions3 = ['运营商','厂商','集成商','政府机关'];
    $scope.modelOptions4 = ['独立完成','合作完成','阶段完成'];
    $scope.yhModel = [];
    $scope.yhModel2 = [];
    $scope.yhModel3 = [];
    $scope.yhModel4 = [];
    $scope.yhModel5 = [];
    $scope.yhModel6 = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.getSummary ={onSelectionChanged(){
        $scope.word = $scope.yhModel.join(',');
    }};
    $scope.getSummary2 ={onSelectionChanged(){
        $scope.work = $scope.yhModel2.join(',');
    }};
    $scope.getSummary3 ={onSelectionChanged(){
        $scope.coop = $scope.yhModel3.join(',');
    }};
    $scope.getSummary4 ={onSelectionChanged(){
        $scope.certificate = $scope.yhModel4.join(',');
    }};
    $scope.getSummary5 ={onSelectionChanged(){
        $scope.inProjct = $scope.yhModel5.join(',');
    }};
    $scope.getSummary6 ={onSelectionChanged(){
        $scope.companyProjects = $scope.yhModel6.join(',');
    }};
    var companyId = {id : $stateParams.id};
    //获取值
    companycapSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.companyEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editInfo.id,
            company: vm.editInfo.company,
            professionAuthens: vm.word,
            manageAuthens:vm.work,
            cooperates:vm.coop,
            companyProjects:vm.companyProjects,
            companyCertificates:vm.certificate,
            inProjcts:vm.inProjct,
            companyDevelop: vm.editInfo.companyDevelop,
            projectDevelop: vm.editInfo.projectDevelop,
            area: vm.editInfo.area,
            money: vm.editInfo.money,
            personForm: vm.editInfo.personForm,
            config: vm.editInfo.config,
            device: vm.editInfo.device,
            companyArea: vm.editInfo.companyArea,
            companyBusiness: vm.editInfo.companyBusiness,
            cooperate: vm.editInfo.cooperate,
            completePro: vm.editInfo.completePro,
            culture: vm.editInfo.culture,
            holidayActive: vm.editInfo.holidayActive,
            bulletinBoard: vm.editInfo.bulletinBoard,
        };
        companycapSer.editCompanyAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.companycap.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});