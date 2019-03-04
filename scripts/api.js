'use strict';

const api = (function () {
  
  const baseUrl = 'https://thinkful-list-api.herokuapp.com/enrique-joel';

  function getItems() {
    return fetch(`${baseUrl}/items`);
  }

  function createItem(name) {
    let newItem= {
      name,
    };
    newItem = JSON.stringify(newItem);
    return fetch(`${baseUrl}/items`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: newItem  });
  }

  function updateItem(id, updateData) {
    return fetch(`${baseUrl}/items/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    });
  }

  return{
    getItems,
    createItem,
    updateItem,
  };

})();