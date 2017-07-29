var app = angular.module('pGroup', ['toastr']);
app.controller('pGroupCtrl', function($scope, hasPaySer,toastr){

    $scope.showed = true;
    //获取一级科目
    hasPaySer.listFirstSubject().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collect = function(){
        var startTime = angular.element('.startTime').val();
        var endTime = angular.element('.endTime').val();
        var data = {
            firstSubject:$scope.firstSubject || '',
            startTime:startTime,
            endTime:endTime
        };
        hasPaySer.collectFirstSubject(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                $scope.first = $scope.firstSubject? true : false;
                $scope.time = startTime || endTime? true : false;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




