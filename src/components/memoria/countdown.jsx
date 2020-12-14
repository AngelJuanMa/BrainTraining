import React, { Component, useState, useEffect } from "react";
import "./countdown.style.css";
class Countdown extends Component {
    constructor(props) {
        super(props);
        let time =
            this.state = {
                time_limit: this.props.time,
                timeLeft: this.props.time,
                timePassed: 1,
                isIn: 0
            };

    }

    startTimer = () => {
        this.setState({
            isIn: 1
        })
        var timer = setInterval(() => {
            this.setState({
                timeLeft: this.state.time_limit - this.state.timePassed,
                timePassed: this.state.timePassed += 1
            })
            if (this.state.timeLeft == 0) {
                clearInterval(timer)
                this.props.timeOut();
                this.setState({
                    isIn: 0
                })
            }
        }, 1000);


    };

    calculateTimeFraction() {
        const rawTimeFraction = this.state.timeLeft / this.state.time_limit;
        return rawTimeFraction - (1 / this.state.time_limit) * (1 - rawTimeFraction);
    }

    render() {
        if (this.props.timeStart === true && this.state.isIn === 0) this.startTimer()
        console.log(this.props)
        return (
            <React.Fragment>
                <div id="app">
                    <div class="base-timer">
                        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <g class="base-timer__circle">
                                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                                <path id="base-timer-path-remaining" stroke-dasharray="283" class="base-timer__path-remaining arc"
                                    d="
                                    M 50, 50
                                    m -45, 0
                                    a 45,45 0 1,0 90,0
                                    a 45,45 0 1,0 -90,0
                                "></path>
                            </g>
                        </svg>
                        <span id="base-timer-label" class="base-timer__label">
                            {this.state.timeLeft > 69 || this.state.timeLeft > 69 === 0
                                ? <p>1:{this.state.timeLeft - 60}</p>
                                : (this.state.timeLeft > 60
                                    ? <p>1:0{this.state.timeLeft - 60}</p>
                                    : <p>{this.state.timeLeft}</p>
                                )
                            }
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default Countdown;
