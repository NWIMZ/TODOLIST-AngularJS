app.directive('addTodo',function(){
    return {
        restrict: 'EA',
        template: '<div class="wrap-addtodo">' +
                '<div class="center"><input type="text" ng-model="newItem" ng-keyup="handlerKeyup($event)" class="input-addtodo" placeholder="添加待办事项" /></div>' +
                '<span class="addtodo">+</span>' +
                '<div class="right" ng-show="isNotEmpty"><span ng-click="clear()" class="btn-clear">×</span><span class="btn-addtodo" ng-click="add()">添加</span></div>' + 
            '</div>',
        replace: true,
        scope: true,// 独立作用域：继承父级作用域，同时创建自己的独立作用域
        controller: function ($scope){
            $scope.newItem = '123';
            $scope.isNotEmpty = false;
            $scope.$watch('newItem',function(newVal,oldVal){
                if(newVal==''){
                    $scope.isNotEmpty = false;
                }else{
                    $scope.isNotEmpty = true;
                }
            });
            // 添加
            $scope.add =function () {
                var item = $scope.newItem;
                if(item){
                    $scope.todoList.push({name: item,isComplete: false});
                    $scope.newItem = '';
                }
            };
            $scope.handlerKeyup = function (event) {
                if(event.keyCode==13){
                    $scope.add();
                }
            };
            // 清空内容
            $scope.clear = function () {
                $scope.newItem = '';
            };
        }
    };
})