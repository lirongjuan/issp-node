var app = angular.module('companyExport', ['toastr']);
app.controller('companyExportCtrl', function($scope, companycapSer,$state,toastr){
    companycapSer.allCompanyName().then(function(response){
        if(response.data.code==0){
            $scope.companyNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            companyName:$scope.companyName
        };
        window.open(`/companyName/exportFile${encode(obj,true)}`);
    };
});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


