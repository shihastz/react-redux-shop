import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes > 0 ? props.numOfCakes : 0}</h2>
            <input type="text" onChange={e => setnumber(e.target.value)} value={number}/>
            <button type="button" onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake : number => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
