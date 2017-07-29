var app = angular.module('area', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailCollectCtrl', function($scope, emailSer,toastr){
    $scope.firstCompany = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.showed = true;
    //获取所有地区
    emailSer.allgetLender().then(function(response){
        if(response.data.code == 0){
            $scope.alleAreas = response.data.data;
        }else {
            toastr.error( response.data.msg , '温馨提示');
        }
    });

    $scope.getSummary ={onSelectionChanged(){
        var data = {areas:[]};
        for(var i= 0;i<$scope.firstCompany.length;i++){
            data.areas.push($scope.firstCompany[i]);
        }
        emailSer.collectLender(data).then(function(response){
            if($scope.firstCompany.length==0){
                $scope.summaryLists = {};
            }else {
                if(response.data.code == 0){
                    $scope.summaryLists = response.data.data;
                    angular.forEach($scope.summaryLists,function(item,index){
                        if(item.type=="合计"){
                            $scope.tabTit = item;
                        }
                    });
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            }

        })
    }}

});




