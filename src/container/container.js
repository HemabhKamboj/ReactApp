import React, {Component} from 'react'


class Container1 extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            stateprop1 : "Our Initial State",
            stateprop2 : 5

        }
    }

        changeState = () => (
            this.setState({ stateprop2: this.state.stateprop2 + 1,
                            stateprop1: this.state.stateprop1 + "H"})
        )

        changeState2 = () => (
            this.setState({ stateprop1: this.state.stateprop1 + "H"})
        )
   render () {
    return (
        <div>
            <button onClick = {() => this.changeState()}> Change State </button>
            <button onClick = {() => this.changeState2()}> Change State </button>
            <br />

            {this.state.stateprop2}
            <br />
            {this.state.stateprop1}
        </div>
    )}


}

export default Container1;

