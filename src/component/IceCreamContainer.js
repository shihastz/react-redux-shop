import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux/iceCreams/iceCreamAction'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice Cream - {props.numOfIcecream > 0 ? props.numOfIcecream : 0}</h2>
            <button type="button" onClick={props.buyIcecream}>Buy Ice-Cream</button>
        </div>
    )
}

//to access state
const mapStateToProps = state => {
    return {
        numOfIcecream : state.iceCream.numOfIcecream
    }
}

//to dispatch action
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => dispatch(buyIcecream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
