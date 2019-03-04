'use strict';

const api = (function () {
  
  const baseUrl = 'https://thinkful-list-api.herokuapp.com/enrique-joel';

  function getItems() {
    return listApiFetch(`${baseUrl}/items`);
  }

  function deleteItem(id) {
    return listApiFetch(`${baseUrl}/items/${id}`,{
      method: 'DELETE',    
    });
  }

  function createItem(name) {
    return listApiFetch(`${baseUrl}/items`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({ name }) });
  }

  function updateItem(id, updateData) {
    return listApiFetch(`${baseUrl}/items/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    });
  }

  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
        
        // In either case, parse the JSON stream:
        return res.json();
      })
  
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
      
        // Otherwise give back the data as resolved Promise
        return data;
      });
  }

  return{
    getItems,
    deleteItem,
    createItem,
    updateItem,
  };

})();