/*global cuid, Item */
'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id) {
    return this.items.find(item => item.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  }

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    } catch(error) {
      console.log('Cannot update name: ' + error.message);
    }
  }

  function findAndDelete(id) {
    // this.items.filter(item => item.id !== id);
    this.items.splice(this.items.findIndex(item => item.id === id), 1);
  }

  return {items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete};
}());