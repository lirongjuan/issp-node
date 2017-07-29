var app = angular.module('waitExport', ['toastr']);
app.controller('waitExportCtrl', function($scope, waitSer,$state,toastr){
    $scope.workersAddFun = function(){
        var obj = {
            startMonth:$scope.startMonth,
            endMonth:$scope.endMonth,
            years:$scope.years
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


