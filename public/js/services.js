'use strict';

var app = angular.module('angularApp');

app.service('myService',function($http, $q) {
    this.getAll = () => {
        return $http.get('./api/');
    };
    this.create = newPost => {
       // console.log(newPost)
        var name = newPost.name;
        var description = newPost.description;
        var price = newPost.price;
        var category = newPost.category;
        var image = newPost.image;

        return $http.post('./api/', {name: name, description: description,
                            price: price, category: category, image: image});
    };
    this.deleteById = id => {
        return $http.delete(`./api/${id}`);
    };
    this.editById = (id, newData) => {
       // console.log(id);
        return $http.put('./api/', {name: newData.name, description: newData.description,
            price: newData.price, category: newData.category, image: newData.image, id:id});
    }
    
   // this.getDetails = (id, image) => {
       // $scope.detailsId = id;
        //$scope.detailsImage = image
     //   return (id,image);
    //}

    this.getDetails = (id) => {
       // console.log(id);
        return $http.get(`./api/details/${id}`);
    };
    


});
