var app = angular.module('area', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailCollectCtrl', function($scope, emailSer,toastr){
    $scope.firstCompany = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.showed = true;
    $scope.selectType = function(val){
        var data = {type:val};
        //获取所有项目组
        emailSer.allProject(data).then(function(response){
            if(response.data.code == 0){
                $scope.alleAreas = response.data.data;
            }else {
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    }
    $scope.collect = function(){
        var data = {
            type:$scope.type,
            projectGroups:$scope.firstCompany.join(',')
        }
        emailSer.summarize(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                toastr.success("已汇总成功", '温馨提示');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        });
    }

});




