import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes > 0 ? props.numOfCakes : 0}</h2>
            <button type="button" onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//to access state
const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

//to dispatch action
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
