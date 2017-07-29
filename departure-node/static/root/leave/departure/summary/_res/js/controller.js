
var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, deparSer,toastr){
   // //部门
   //  deparSer.getBranch().then(function(response){
   //      if(response.data.code == 0){
   //          $scope.branchs = response.data.data;
   //      } else{
   //          toastr.error(response.data.msg, '温馨提示');
   //      }
   //  });
   //  //岗位
   //  deparSer.getJob().then(function(response){
   //      if(response.data.code == 0){
   //          $scope.jobs = response.data.data;
   //      } else{
   //          toastr.error(response.data.msg, '温馨提示');
   //      }
   //  });
    
        
        $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            department:vm.department,
            position:vm.position
        };
        console.log(vm.sum)
        deparSer.deparSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});





