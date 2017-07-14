var app = angular.module('salaryconfirmExport', ['toastr']);
app.controller('salaryconfirmExportCtrl', function($scope,$state,toastr){
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            year:$scope.data.year,
            month:$scope.data.month
        };
        // console.log(obj)
        window.open(`/salaryconfirmExport/export${encode(obj,true)}`);
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


