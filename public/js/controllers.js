'use strict';
var app = angular.module('angularApp');

app.controller('homeCtrl', function(myService, $scope, $state) {
    $scope.editing = false;
    $scope.myFilter = '';
    $scope.changeFilter = function(filter){
        $scope.myFilter = filter;
    };
    myService.getAll()
        .then(stuff => {
           // console.log(stuff);
            $scope.apiData = stuff;
        });
    $scope.editItem = function(item, itemData) {
        $scope.editing = true;
        $scope.newItem= item.name;
        $scope.newItem= item.description;
        $scope.newItem= item.price;
        $scope.newItem= item.category;
        $scope.newItem= item.image;
        $scope.editId = item.id;
        var id =item.id;
    };
    $scope.postEdit = function() {

        myService.editById($scope.editId,$scope.newItem)
            .then($scope.editing = false)
            .then(myService.getAll()
                .then(stuff => {
                    $scope.apiData = stuff;
                })
        )
    }

    $scope.goToDetails = function(id, image){
        //console.log(id, image);
    }

});
app.controller('deleteCtrl', function(myService, $scope, $state) {
    myService.deleteById($state.params.id)
        .then($state.go('home'));

});
app.controller('state1Ctrl', function(myService, $scope, $state) {
    $scope.newPost = function(newData){
        var obj = {
            name: $scope.newName,
            description: $scope.newDescription,
            price: $scope.newPrice,
            category: $scope.newCategory,
            image: $scope.newImage
        }
        myService.create(obj)
            .then($state.go('home'));

    }
    
});

app.controller('statsCtrl', function(myService, $scope) {
     console.log('state2Ctrl');
    
});

app.controller('state3Ctrl', function(myService, $scope, $state) {
   // console.log('state3Ctrl');
 //   console.log($state.params);
    myService.getDetails($state.params.id)
    .then(stuff => {
       // console.log(stuff.data);
        $scope.detailsName = stuff.data.name;
        $scope.detailsCategory = stuff.data.category;
        $scope.detailsImage = stuff.data.image;
        $scope.detailsDescription = stuff.data.description;
        $scope.detailsPrice = stuff.data.price;
        $scope.detailsId = stuff.data.id;
        $scope.items = stuff.data;
       // console.log($scope.detailsImage);
       // $scope.apiData = stuff;
        $scope.editItem = function(item, itemData) {
            $scope.editing = true;
            $scope.newName= item.name;
            $scope.newDescription= item.description;
            $scope.newPrice= item.price;
            $scope.newCategory= item.category;
            $scope.newImage= item.image;
            $scope.editId = item.id;
            var id =item.id;
        };
        $scope.postEdit = function() {
            var item = {
                name: $scope.newName,
                description: $scope.newDescription,
                price: $scope.newPrice,
                category: $scope.newCategory,
                image: $scope.newImage
            };
            myService.editById($scope.editId,item)
                .then($scope.editing = false)
                .then(myService.getAll()
                    .then(stuff => {
                        $scope.apiData = stuff;
                    })
                )
                .then($state.go('home'));
        }

    });
});
