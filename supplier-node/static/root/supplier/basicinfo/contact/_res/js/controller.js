/**
 * Created by ike on 2017/5/3.
 */
var app = angular.module('contactBasic', ['toastr','ng-pagination']);
app.controller('contactBasicCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){

    //列表
    var contactData ={id: $stateParams.id};
    basicinfoSer.contactList(contactData).then(function (response) {
        if (response.data.code == 0) {
            $scope.contactBasics = response.data
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selectList = function(event){
        angular.forEach($scope.contactBasics.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId', $scope.idSocialList);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.contactBasics,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deledSubId',function(event,delid){
        angular.forEach($scope.contactBasics.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, suId){
     $scope.idSocialList = suId;
     });
     $scope.contactDelete = function(){
     if($scope.idSocialList){
     $state.go('root.supplier.basicinfo.contact.contactDelete[12]',{suId:$scope.idSocialList});
      }
     };
     $scope.contactEdit = function(){
     if($scope.idSocialList){
     $state.go('root.supplier.basicinfo.contact.contactEdit[12]',{suId:$scope.idSocialList});
     }
     };
});