import React, { useReducer } from 'react';

import frontContext from './frontContext';
import frontReducer from './frontReducer';

import { MODAL_FUTURE } from '../../types';

const FrontState = props => {
    const initialState = {
        modal: false
    }
    //
    const [state, dispatch] = useReducer(frontReducer, initialState);


    //fn
    const showModal = () => {
        dispatch({
            type: MODAL_FUTURE
        })
    }

    return (
        <frontContext.Provider

            value={{
                modal: state.modal,

            }}>
            {props.children}
        </frontContext.Provider>
    );
}

export default FrontState;