import React from 'react';
import './App.css';
import BTNS from "./BTNS";
import Value from "./Value";
import {connect} from "react-redux";
import {increment, reset} from "./store";


class App extends React.Component {

    state = {
        step:1
    };

    increment= () => {
        this.props.increment(this.state.step);
    };


    render = () => {
        return (
            <div className='counter_box'>
                <div className='counters'>
                    <div className='center'>
                        <Value count_start={this.props.count_start}/>
                        <BTNS increment={this.increment}
                              reset={this.props.reset}
                              count_start={this.props.count_start}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count_start: state.count_start,
    }
};


const ConnectedApp = connect(mapStateToProps,{increment,reset})(App)
export default ConnectedApp;

