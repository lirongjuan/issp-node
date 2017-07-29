var app = angular.module('reExport', ['toastr']);
app.controller('reExportCtrl', function($scope){

    //导出
    $scope.exportRe = function(){
        var obj = {
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        window.open(`/inventoryrecord/export/${encode(obj,true)}`);
    };

});
function encode(){
    var obj = arguments[0];
    var inventory = false;
    if (arguments[1]) {
        inventory = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((inventory && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


