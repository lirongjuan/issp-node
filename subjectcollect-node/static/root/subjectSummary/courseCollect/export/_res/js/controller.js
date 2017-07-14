var app = angular.module('courseCollectExport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('courseCollectExportCtrl', function($scope, courseCollectSer,$state,toastr){
    $scope.Projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取所有地区
    courseCollectSer.subjectsGetArea().then(function(response){
        if(response.data.code==0){
            $scope.projectNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            area:$scope.Projects
        };
        window.open(`/subjectsExport/Export${encode(obj,true)}`);
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


