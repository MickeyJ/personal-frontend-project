import { EventEmitter } from 'events';
import dispatcher from '../Dispatch/dispatcher';

import {
  LOAD_ITEMS,
  REMOVE_ITEM,
} from '../Constant/constants'

class ItemStore extends EventEmitter{
  constructor(){
    super();
    this.items = []
  }
  loadItems(items){
    this.items = items;
    this.emit('change');
  }
  removeItem(idx){
    this.items.splice(idx, 1);
    this.emit('change');
  }
  getState(){
    return this.items;
  }
  handleActions(action){
    switch(action.source){
      case LOAD_ITEMS:
        return this.loadItems(action.items);

      case REMOVE_ITEM: {
        return this.removeItem(action.idx);
      }
      default:
        return action;
    }
  }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));
export default itemStore;