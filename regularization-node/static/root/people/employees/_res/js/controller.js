var app = angular.module('employees', [{
    files:[
        "root/people/employees/_res/js/service.js",
    ]
}]);
app.controller('employCtrl',function ($scope,$state) {
    if ($state.current.url == '/employees') {//默认加载列表
        $state.go('root.people.employees.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('employMenuCtrl',function($scope,$state,$rootScope,$location,employSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //新增
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass =$location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        employSer.employPermission(buttonName).then(function(response){
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
        $scope.page =$location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.people.employees.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.people.employees.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    //------------------------------
    $scope.management = function(){
        if($scope.idListd){
            $state.go('root.people.employees.management[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'managementMenu'
        }
    };
    $scope.listExamine = function(){
        if($scope.idListd){
            $state.go('root.people.employees.listExamine[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'listExamineMenu'
        }
    };
    $scope.making = function(){
        if($scope.idListd){
            $state.go('root.people.employees.making[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'makingMenu'
        }
    };
    $scope.planning = function(){
        if($scope.idListd){
            $state.go('root.people.employees.planning[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'planningMenu'
        }
    };
    $scope.budget = function(){
        if($scope.idListd){
            $state.go('root.people.employees.budget[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'budgetMenu'
        }
    };
    $scope.director = function(){
        if($scope.idListd){
            $state.go('root.people.employees.director[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'directorMenu'
        }
    };
    /*employSer.employPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });*/
});

