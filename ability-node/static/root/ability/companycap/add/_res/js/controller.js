var app = angular.module('companyAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('companyAddCtrl', function($scope, companycapSer,$state,toastr){
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
    $scope.companyAddFun = function(){
        var vm = $scope;
        var data = {
            company: vm.add.company,
            professionAuthens: vm.word,
            manageAuthens:vm.work,
            cooperates:vm.coop,
            companyProjects:vm.companyProjects,
            companyCertificates:vm.certificate,
            inProjcts:vm.inProjct,
            companyDevelop:vm.add.companyDevelop,
            projectDevelop:vm.add.projectDevelop,
            area:vm.add.area,
            money:vm.add.money,
            personForm:vm.add.personForm,
            config:vm.add.config,
            device:vm.add.device,
            companyArea:vm.add.companyArea,
            companyBusiness:vm.add.companyBusiness,
            culture:vm.add.culture,
            holidayActive:vm.add.holidayActive,
            bulletinBoard:vm.add.bulletinBoard,
        };
        companycapSer.addCompanyAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.companycap.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





