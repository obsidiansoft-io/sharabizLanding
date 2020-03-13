import { MODAL_FUTURE } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case MODAL_FUTURE:
            return {
                ...state,
                modal: true
            }
        default:
            return state;
    }
}