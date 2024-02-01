import React, {Fragment} from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds}) => {

    return <Fragment>
        <section className="timer-container">
            <section className="timer">
                <div className="clock">
                    <section>
                        <p>{timerDays}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <small>Hours</small>
                    </section>{" "}
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <small>Minutes</small>
                    </section>{" "}
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <small>Seconds</small>
                    </section>
                </div>
            </section>
        </section>

    </Fragment>

};

Clock.defaultProps = {
    timerDays: 11,
    timerHours: 11,
    timerMinutes: 11,
    timerSeconds: 11,
};

export default Clock;