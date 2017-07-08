import { TXT_CHAT_MESSAGE } from './types';

export const messageSent = (message) => {
    return {
        type: TXT_CHAT_MESSAGE,
        payload: message
    };
};
