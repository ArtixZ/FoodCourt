import moment from 'moment';

import {
    TXT_CHAT_MESSAGE,
    TXT_RESPONSE_MESSAGE,
} from '../actions/types';

const INIT_STATE = [{
    msg_id: `temp_${generateGuuId()}`,
    timeStamp: moment().toISOString(),
    direction: 'ingoing',
    body: {
        type: 'card',
        payload: [
            {
                "pic": "https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": ['Healthy', 'Salad'],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": ['healthy', 'protein'],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }
        ]
    },
}, {
    msg_id: `temp_${generateGuuId()}`,
    timeStamp: moment().toISOString(),
    direction: 'ingoing',
    body: {
        type: 'card',
        payload: [
            {
                "pic": "https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }
        ]
    },
}, {
    msg_id: `temp_${generateGuuId()}`,
    timeStamp: moment().toISOString(),
    direction: 'ingoing',
    body: {
        type: 'card',
        payload: [
            {
                "pic": "https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }, {
                "pic": "https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg",
                "name": "Smith & Wollensky Rib-eye",
                'highlights': ['Healthy', 'Salad'],
                "suggestion": "Rich in Protein",
                "rating": 4,
                "tags": [],
                "distance": 4.1,
                "price": 24.99
            }
        ]
    },
}]

export default (state = INIT_STATE, action) => {

    let message;
    switch (action.type) {
        case TXT_CHAT_MESSAGE:
            message = generateTxtMsg(action.payload);
            return [message, ...state];
        case TXT_RESPONSE_MESSAGE:
            const {positive, something} = action.payload;
            txtMessage = generateTxtResponse(positive, something);
            cardMessage = generateCardResponse(INIT_STATE, positive, something);
            return [...cardMessage, txtMessage, ...state]
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

const generateTxtResponse = (positive, something) => {
    const id = `temp_${generateGuuId()}`;
    const timeStamp = moment().toISOString();
    const modal = positive ? 'with' : 'without';

    return {
        msg_id: id,
        timeStamp,
        direction: 'ingoing',
        body: {
            type: 'txt',
            msg: `Suggesting something ${modal} "${something.toString()}" for you.`
        }
    }
}

const generateCardResponse = (msgs, positive, filters) => {
    const cards = msgs.filter(item => item.body.type ==='card');
    let resPayload = [];

    cards.forEach( (card) => {
        const payload = card.body.payload;
        const res = payload.filter( item => {
            for(let val of filters) {
                if(item.tags.map(item => item.toLowerCase()).includes(val.toLowerCase())) return positive;
                return !positive;
            }
        } )

        resPayload = [...resPayload, ...res];
    })

    return [{
        msg_id: `temp_${generateGuuId()}`,
        timeStamp: moment().toISOString(),
        direction: 'ingoing',
        body: {
            type: 'card',
            payload: resPayload
        }
    }, {
        msg_id: `temp_${generateGuuId()}`,
        timeStamp: moment().toISOString(),
        direction: 'ingoing',
        body: {
            type: 'card',
            payload: resPayload
        }
    }, {
        msg_id: `temp_${generateGuuId()}`,
        timeStamp: moment().toISOString(),
        direction: 'ingoing',
        body: {
            type: 'card',
            payload: resPayload
        }
    }]
}
