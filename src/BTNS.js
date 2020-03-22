import React from 'react';


class BTNS extends React.Component {
    render = () => {
        let btnColor = this.props.count_start === 5 ? 'disabled' : 'decore_btn';

        return (
            <div className='btns'>
                <div className='btn_border'>
                    <button className={btnColor} onClick={this.props.increment}
                            disabled={this.props.count_start === 5}>Inc
                    </button>
                </div>
                <div className='btn_border'>
                    <button className={btnColor} onClick={this.props.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default BTNS;

