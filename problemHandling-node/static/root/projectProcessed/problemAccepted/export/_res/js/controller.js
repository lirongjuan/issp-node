var app = angular.module('problemExport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('problemExportCtrl', function($scope, problemSer,$state,toastr){
    $scope.Projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取内部项目编号
    problemSer.problemName().then(function(response){
        if(response.data.code==0){
            $scope.projectNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            name:$scope.Projects
        };
        window.open(`/problemExport/export${encode(obj,true)}`);
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


