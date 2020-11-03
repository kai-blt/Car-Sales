export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (id, name, price) => {
    return {
        type: ADD_FEATURE,
        payload: { id: id, name: name, price: price }
    }
}

