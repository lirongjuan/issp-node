var app = angular.module('managedetail', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('managedetailCtrl', function($scope,$state,$stateParams,toastr,manageSer){

    var getId = {id:$stateParams.id};
    manageSer.getManage(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
});





