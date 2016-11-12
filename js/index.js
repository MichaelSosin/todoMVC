'use strict';

const ListModel = require('./listModel');

let list = new ListModel();

list.add('Learn HTML', (item) => { console.log(item.title, item.completed) });
list.add('Learn CSS', (item) => { console.log(item.title, item.completed) });
list.add('Learn JS', (item) => { console.log(item.title, item.completed) });

console.log(list.get());

list.remove(1,(remItem) => { console.log(remItem); });

console.log(list.get());

list.drop((list) => {console.log(list); });
