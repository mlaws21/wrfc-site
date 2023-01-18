import schedule from "./files/scheduleHelp.jsx";
import React from "react";
import "./style/Schedule.css";


class SubSzn extends React.Component {
    render() {
        return (
            <div id="match">
                <div className="matchData">{this.props.date}</div>
                <div className="matchData">{this.props.team}</div>
                <div className="matchData">{this.props.location}</div>
                <div className="matchData">{this.props.time}</div>
                <div className="matchData">{this.props.score}</div>
            </div>
        )
    }
}

function buildMatch(currMatch) {
    var matchData = [];
    matchData.push(<SubSzn date={currMatch[0]} team={currMatch[1]} location={currMatch[2]} time={currMatch[3]} score={currMatch[4]} />)
    return matchData;
}
class Season extends React.Component {
    render() {
        var currSzn = schedule[this.props.szn];
        var whichSzn = currSzn[0];
        var sznData = currSzn[1];
        var finalData = [];
        for (var i = 0; i < sznData.length; i++) {
            finalData.push(buildMatch(sznData[i]));
        }
        return (
            <div>
                <p id="which">{whichSzn}</p>
                <p>{finalData}</p>
            </div>
        )
    }
}

// function buildSeason() {
//     var all = [];
//     for (var i = 0; i < allPeople.length; i++) {
//         all.push(<Person name={allPeople[i][0]} onField={allPeople[i][1]} offField={allPeople[i][2]} major={allPeople[i][3]} />)
//     }
//     return (all);
// }

function Schedule() {
    var allData =[];
    for (var i = 0; i < schedule.length; i++) {
        allData.push(<Season szn={i} />)
    }
    return (
        <div>
            <p id="title">Schedule</p>
            {allData}

        </div>
    )
}

export default Schedule;