'use strict';

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();



  api.getItems()
  .then(res => res.json())
  .then(items => {

    items.forEach(i=>store.addItem(i));
    shoppingList.render();


    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
  })

  
  
});

//store.items.push(Item.create('apples'));



