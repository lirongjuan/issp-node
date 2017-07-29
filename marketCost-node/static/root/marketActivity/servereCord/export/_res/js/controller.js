var app = angular.module('dispatchExport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('exportCtr', function($scope,$state,toastr,servereCordSer){

    $scope.firstCompany = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.showed = true;
    //获取所有地区
    servereCordSer.getAllAreas().then(function(response){
        if(response.data.code == 0){
            $scope.alleAreas = response.data.data;
        }else {
            toastr.error( response.data.msg , '温馨提示');
        }
    });

    //导出
    $scope.workersAddFun = function(){
        var startTime = angular.element('.startTime').val();
        var endTime = angular.element('.endTime').val();
        var obj = {
            startDate:startTime,
            endDate:endTime,
            areas:$scope.firstCompany
        };
        window.open(`/serveRecord/exportFile${encode(obj,true)}`);
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


