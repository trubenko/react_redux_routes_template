import React , { Component }  from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { onClickBlock} from '../actions/index'

class App extends Component{


    render(){

        let block ;

        if(!this.props.block){
            block = '';
        } else {
            block = (
                <ul>
                    {this.props.block.map((li)=> <li key={li}>{ li}</li> )}
                </ul>
            )
        }

        return (<div onClick={this.props.onClickBlock}>
            <div>
                <Link to="tab1"> Tab 1</Link>
                <Link to="tab2"> Tab 2</Link>
                <Link to="tab3"> Tab 3</Link>
            </div>
            Click me
            { block }
            { this.props.children}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        block: state.block
    }
}
export default  connect()(App);