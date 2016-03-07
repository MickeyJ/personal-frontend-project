import { EventEmitter } from 'events';
import dispatcher from '../Dispatch/dispatcher';

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
      case 'LOAD_ITEMS':{
        this.loadItems(action.items);
      }break;
      case "REMOVE_ITEM": {
        this.removeItem(action.idx);
      }
    }
  }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));
export default itemStore;