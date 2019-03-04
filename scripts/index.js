'use strict';

/* global shoppingList, store, api */

$(document).ready(function() {
  
 

  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.bindEventListeners();
      shoppingList.render();
    });
  


});

//store.items.push(Item.create('apples'));



