'use strict';

const api = (function () {
  
  const baseUrl = 'https://thinkful-list-api.herokuapp.com/enrique-joel';

  function getItems() {
    return fetch(`${baseUrl}/items`);
  }

  return{
    getItems,

  };

})();