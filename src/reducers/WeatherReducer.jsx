import { FETCH_WEATHER } from '../actions/index';
import _ from 'lodash';


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // console.log(action.payload.data.city);
      if (_.includes(state.map((city) => {
          return city.city.name
        }), action.payload)) {
        return state;
      }

      // return _.concat(action.payload.data, state);
      return [action.payload.data, ...state];
    default:
      return state;
  }
}