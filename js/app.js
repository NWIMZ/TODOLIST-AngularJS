// 创建模块
var app = angular.module('TODOLIST',[]);
app.controller('main', ['$scope',function($scope) {
    $scope.todoList = [
        {
            name: '1',
            isComplete: false
        },
        {
            name: '21',
            isComplete: false
        },
        {
            name: '31',
            isComplete: true
        }
    ];

    $scope.title = '我的一天';
}]);