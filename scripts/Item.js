/* global cuid */
'use strict';

// eslint-disable-next-line no-unused-vars
const Item = (function() {
  function validateName(name) {
    if (!name) {
      throw Error('Name does not exist');
    }
  }
  function create(name) {
    return {id: cuid(), name, checked: false};
  }

  return {validateName, create};
}());