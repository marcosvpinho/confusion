import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) =>{
    return state;

};