var app = angular.module('storedetail', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('storedetailCtrl', function($scope,$state,$stateParams,toastr,storeSer){

    var getId = {id:$stateParams.id};
    storeSer.getStore(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
});





