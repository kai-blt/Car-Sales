export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (id, name, price) => {
    return {
        type: ADD_FEATURE,
        payload: { id: id, name: name, price: price }
    }
}

export const removeFeature = (id, price, addedFeaturesArray) => {
    const updatedFeaturesArray = addedFeaturesArray.filter(item => item.id !== id);
    console.log(updatedFeaturesArray)

    return {
        type: REMOVE_FEATURE,
        payload: {price: price, updatedFeaturesArray: updatedFeaturesArray}
    }
}
