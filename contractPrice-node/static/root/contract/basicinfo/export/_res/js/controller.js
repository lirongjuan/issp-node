var app = angular.module('basicinfoExport', ['toastr']);
app.controller('basicinfoExportCtrl', function($scope, basicinfoSer,$state,toastr){
    //获取内部项目编号
    basicinfoSer.allProject().then(function(response){
        if(response.data.code==0){
            $scope.projectName = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            innerProject:$scope.innerProject
        };
        window.open(`http://localhost:9991/contractprojectinfo/export${encode(obj,true)}`);
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


