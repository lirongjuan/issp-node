var app = angular.module('business', [
    {files:[
    "root/hand/_res/js/service.js"
]}
]);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/hand') {//默认加载列表
        $state.go('root.hand.work');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    });
    $scope.$on("changePositionId",function(event,id){
        $scope.$broadcast("passPositionId",id)
    })
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });

}).controller('navCtrl',function($scope,$state,$location,handSer){
    $scope.navCla='means';
    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'means';
    $scope.navClass= function(name){
       $scope.navCla=name
    };
    handSer.navPermission().then(function(response){   //权限设置
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
            $scope.isHide= false;
        }
    });
    handSer.setPermission().then(function(response){   //权限设置
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
        {id:"1",item:"工作交接",menuList:[{name1:"工作交接",msg:'work'},{name2:"资料交接",msg:'means'}
        ,{name3:"任务交接",msg:'task'},{name4:"设备交接",msg:'device'},{name5:"工作交接时间规范",msg:'times'}
            ,{name6:"工作交接责任义务",msg:'liability'}], showIs: true},
        {id:"2",item:"设置",menuList:[{name7:'设置',msg:'setting'}], showIs: false}
    ];
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
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

