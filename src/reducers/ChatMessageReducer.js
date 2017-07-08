import moment from 'moment';

import {
    TXT_CHAT_MESSAGE,
} from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {
        case TXT_CHAT_MESSAGE:
            const message = generateTxtMsg(action.payload);
            return [...state, message];
        default: 
            return state;
    }
};


function generateGuuId() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const generateTxtMsg = (msg) => {
    const id = `temp_${generateGuuId()}`;
    const timeStamp = moment().toISOString();
    return {
        msg_id: id,
        timeStamp,
        direction: 'outgoing',
        body: {
            type: 'txt',
            msg
        }
    };
};
