import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => { return { ...state } }
const mapDispatchToProps = (dispatch) => {
    return {
        setMenuDataList: data => {
            dispatch(data)
        },
        setMenuKey: data => {
            dispatch(data)
        }
    }
}
const Storeaction = connect(mapStateToProps, mapDispatchToProps)
export default Storeaction