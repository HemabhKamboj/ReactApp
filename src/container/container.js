import React, {Component} from 'react'


class Container1 extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            stateprop1 : "Our Initial State"

        }
    }

        changeState = () => (
            this.setState({ stateprop1: "New State"})
        )
   render () {
    return (
        <div>
            <button onClick = {() => this.changeState()}> Change State </button>
            {this.state.stateprop1}
        </div>
    )}

}

export default Container1;

