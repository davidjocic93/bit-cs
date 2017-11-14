import React from "react";


class Timer extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, this.props.interval);
        this.setState({
            name: "timer"
        });
    }

    render() {
        return (
            <div>
                <h2> Hello from Timer {this.state.date.toLocaleTimeString()} </h2>
                <h3> {this.state.name}</h3>
            </div>
        );
    }
}

export default Timer;