import roster from './files/roster.jsx';

function Roster() {
    return (
        <dev>
            <h1>Roster</h1>
            <div id='roster'>
            <p id='rosterHead'>Players</p>
                <p id='newsBody'>{roster}</p>
            </div>
        </dev>
    )
}

export default Roster;