import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => { return { ...state } }
const mapDispatchToProps = (dispatch) => {
    return dispatch({ type: '' })
}
const Storeaction = connect(mapStateToProps, mapDispatchToProps)
export default Storeaction