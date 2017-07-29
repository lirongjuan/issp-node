var app = angular.module('cover', [{
    files:[
        "root/rotation/cover/_res/js/service.js",
    ]
}]);
app.controller('coverCtrl',function ($scope,$state) {
    if ($state.current.url == '/cover') {//默认加载列表
        $state.go('root.rotation.cover.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('coverMenuCtrl',function($scope,$state,$rootScope,$location,coverSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        coverSer.coverPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.rotation.cover.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.rotation.cover.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    }
    
    $scope.idea = function(){
        if($scope.idListd){
            $state.go('root.rotation.cover.idea[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'ideaMenu'
        }
    }
    $scope.ideaZ = function(){
        if($scope.idListd){
            $state.go('root.rotation.cover.ideaZ[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'ideaZMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
});

//自定义过滤
// app.filter('cover', function(){
//     return function (val) {
//         var result;
//         switch(val){
//             case "INVITEDTENDERING":
//                 result = "邀请招标";
//                 break;
//             case "OPENTENDERING":
//                 result = "公开招标";
//                 break;
//             case "SOFTWAREDEVELOPMENT":
//                 result = "软件开发";
//                 break;
//             case "INTELLIGENTSYSTEMINTEGRATION":
//                 result = "智能系统集成";
//                 break;
//             case "PLANNINGMARKETINGSOLUTIONS":
//                 result = "策划与营销方案";
//                 break;
//             case "THAW":
//                 result = "解冻";
//                 break;
//             case "CONGEAL":
//                 result = "冻结";
//                 break;
//             case "DELETE":
//                 result = "删除";
//                 break;
//             case "NOACTIVE":
//                 result = "未激活";
//                 break;
//             case "UNREVIEW":
//                 result = "未审核";
//                 break;
//         }
//         return result;
//     }
// });
