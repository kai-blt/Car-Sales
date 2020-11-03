export const mapStateToProps = (state) => {
    return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures
    } 
};