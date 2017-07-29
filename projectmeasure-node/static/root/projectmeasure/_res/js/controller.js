var app = angular.module('projectmeasure', [{
    files: ['root/projectmeasure/_res/js/service.js']
}]);
app.controller('projectmeasureCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectmeasure') {//默认加载列表
         $state.go('root.projectmeasure.manage');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,projectmeasureSer){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
        $scope.navCla=name;
    };
    //权限
    projectmeasureSer.navPermission().then(function(response){
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
    });
    projectmeasureSer.setPermission().then(function(response){
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
    });
    $scope.showsList = [
        {id:"1",item:"项目测算",menuList:[{name:'项目基本信息'},{name2:'项目费用情况'},{name3:'项目人员需求'},{name10:'其他项目需求界面'}],showIs:false},
        {id:"2",item:"工作界面",menuList:[{name4:'单个项目单个界面'},{name5:'单个项目多个界面'},{name6:'多个项目单个界面'},{name7:'多个项目多个界面'}],showIs:false},
        {id:"3",item:"项目测算管理汇总",menuList:[{name8:'项目测算与汇总'}],showIs:false},
        {id:"4",item:"输出评估结果",menuList:[{name11:'输出评估结果'}],showIs:false},
        {id:"5",item:"设置",menuList:[{name9:'设置'}],showIs:false},
    ];
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                /* angular.forEach(function(item){ showSubAble sublist*/
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});
//自定义指令
app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});
