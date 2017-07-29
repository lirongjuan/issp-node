
var app = angular.module('commonEdit', ['toastr','ipCookie']);
app.controller('commonEditCtrl', function ($scope, assetsSer, $state, toastr, $stateParams,ipCookie,$location) {
    var companyId = { id: $stateParams.id };
    //获取值
    assetsSer.getOneById1(companyId).then(function (response) {
        if (response.data.code == 0) {
            $scope.data = response.data.data;
            $scope.data.firstSubjectName = $scope.data.firstSubjectVO.name
            var firstData = {
                categoryName: 'COMMON'
            }
            //获取一级列表
            assetsSer.firstList(firstData).then(function (response) {
                if (response.data.code == 0) {
                    $scope.firstList = response.data.data;
                } else if (response.data.code == 403) {
                    toastr.error("请登录用户", '温馨提示');
                }
            })
        }
    });
    //点击提交
    $scope.EditFun = function () {
        var data = $scope.data;
        assetsSer.marketserveapplyEdit1(data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.initialize.sort.common.list');
                toastr.success('温馨提示', "此次编辑成功");
            }else if(response.data.code==403 || response.data.code == 401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }

});
