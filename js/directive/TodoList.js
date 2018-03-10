app.directive('todoList', function () {
    return {
        restrict: 'EA',
        template: '<ul>' +
            '<todo-item ng-repeat="item in todoList track by $index" item="item" complete="completeItem($index)" delete="deleteItem($index)"></todo-item>' +
            '</ul>',
        replace: true,
        scope: {
            todoList: '=data'
        },
        controller: function ($scope) {
            // 标记完成
            $scope.completeItem = function (index) {
                var item = $scope.todoList[index];
                // item.isComplete = !item.isComplete;
                console.log(item);
            };
            $scope.deleteItem = function (index) {
                $scope.todoList.delete(index);
                console.log($scope.todoList);
            };
        }
    };
});