import dispatcher from '../Dispatch/dispatcher';
import $ from 'jquery';

import {
  LOAD_ITEMS,
  REMOVE_ITEM,
} from '../Constant/constants'

export function loadItems(items){
  $.ajax({
    url: '/get-items',
    dataType: 'json',
    method: 'GET',
    success: (data) => {
      items = data;
      dispatcher.dispatch({
        source: LOAD_ITEMS,
        items
      });
    }
  });
}

export function removeItem(idx){
 dispatcher.dispatch({
    source: REMOVE_ITEM,
    idx
  })
}
