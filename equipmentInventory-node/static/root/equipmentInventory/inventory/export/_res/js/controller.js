var app = angular.module('inExport', ['toastr']);
app.controller('inExportCtrl', function($scope){
        //导出
        $scope.exportIn = function(){
            var obj = {
                startTime:angular.element('.startTime').val(),
                endTime:angular.element('.endTime').val()
            };
            window.open(`/inventory/export/${encode(obj,true)}`);
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




