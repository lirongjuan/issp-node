var app = angular.module('export', ['toastr']);
app.controller('exportCtrl', function($scope, voucherRecordsSer,$state,toastr){
    //获取地区
    voucherRecordsSer.getArea().then(function(response){
        if(response.data.code==0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目名称
    voucherRecordsSer.getProject().then(function(response){
        if(response.data.code==0){
            $scope.projectNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取一级科目
    voucherRecordsSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取二级科目
    $scope.changSelect = function(){
        var data={firstSel:$scope.firstSubject};
        voucherRecordsSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //获取三级科目
    $scope.changThird = function(){
        var data={
            firstSel:$scope.firstSubject,
            secondSel:$scope.secondSubject
        };
        voucherRecordsSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //导出
    $scope.workersAddFun = function(){

        var obj = {
            area : $scope.area,
            projectName : $scope.projectName,
            exportStatus : $scope.exportStatus,
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            firstSubject:$scope.firstSubject,
            secondSubject:$scope.secondSubject,
            thirdSubject:$scope.thirdSubject
        };
        console.log(obj);
        window.open(`/vouchergenerate/export${encode(obj,true)}`);
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

// //自定义过滤器
// app.filter('cover',function () {
//     return function(val){
//         var result;
//         switch(val){
//             case "NONE":
//                 result = "未审核";
//                 break;
//             case "CHECK":
//                 result = "已审核";
//                 break;
//         }
//         return result;
//     }
// });
