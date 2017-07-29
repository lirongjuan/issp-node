var app = angular.module('returnRecordExport', ['toastr']);
app.controller('returnRecordExportCtrl', function($scope,$state,toastr){
    //导出
    $scope.workersAddFun = function(){
        var startTime = angular.element('.startTime').val();
        var endTime = angular.element('.endTime').val()
        var obj = {
            startTime:startTime,
            endTime:endTime
        };
        window.open(`/returnRecord/exportFile${encode(obj,true)}`);
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


