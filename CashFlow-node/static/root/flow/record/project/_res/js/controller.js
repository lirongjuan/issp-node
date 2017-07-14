var app = angular.module('recordProject', ['toastr']);
app.controller('recordProjectCtrl', function($scope, recordSer,toastr){

    $scope.showed=true;
    // 项目名称
    recordSer.projects().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
            console.log($scope.projects)
        }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
            // area:data.area,
            // projectGroup:data.projectGroup,
            project:data.project
        };
        recordSer.moneyProject(data.sum).then(function(response){
            if(response.data.code == 0){
                if( data.sum.year == undefined || data.sum.year == '' || data.sum.month == undefined || data.sum.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.recordLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




