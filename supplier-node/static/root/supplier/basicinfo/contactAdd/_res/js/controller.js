var app = angular.module('contactAdd', ['toastr']);
app.controller('contactAddCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var contId = {id : $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(contId).then(function(response){
        if(response.data.code==0){
            $scope.pAddInfo = response.data.data;
        }
    });
    //添加
    $scope.contAddFun= function(){
        var vm = $scope;
        var data = {
            id:vm.pAddInfo.id,
            informationId:vm.pAddInfo.informationId,
            contacts:vm.pAddInfo.contacts2,
            duties: vm.pAddInfo.duties2,
            telephone:vm.pAddInfo.telephone2,
            fax:vm.pAddInfo.fax2,
        };
        basicinfoSer.contactAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




