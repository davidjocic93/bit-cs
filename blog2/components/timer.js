import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { setTimer: "pending..." };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);

        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.setState({ setTimer: new Date().toTimeString() });
            this.props.onTimeElapsed();
        }, this.props.interval
        );
    }

    stop () {
        clearInterval(this.intervalId);
    }


    render() {
        return (
            <div>
                <h4>{this.state.setTimer}</h4>
                {<button onClick={this.start}>START</button>}
                {<button onClick={this.stop}>STOP</button>}
            </div>
        );
    }
}

export default Timer;