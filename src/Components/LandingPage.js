import  AnalogClock  from './AnalogClock'
import { EasternTimeZone } from './EasternTimeZone';
import { CentralTimeZone } from './CentralTimeZone';
import { MountainTimeZone } from './MountainTimeZone';
import { PacificTimeZone } from './PacificTimeZone';
import { AlaskaTimeZone } from './AlaskaTimeZone';
import { HawaiiTimeZone } from './Hawaii-AleutianTimeZone';


const LandingPage = () => {
    return (
        <>
        <center><h3><u>Current times:</u></h3></center>
        <div id="currentTimesWall">
            <span className="clockWall" id="newYork"><AnalogClock title="New York, New York" datediff={0} />
            <br/> <center><EasternTimeZone/></center></span>
            <span className="clockWall"><AnalogClock title="Chicago, Illinois" datediff={-1} />
            <br/> <center><CentralTimeZone/></center>
            </span>
            <span className="clockWall"><AnalogClock title="Denver, Colorado" datediff={-2} />
            <br/> <center><MountainTimeZone/></center>
            </span>
            <span className="clockWall"><AnalogClock title="Seattle, Washington" datediff={-3} />
            <br/> <center><PacificTimeZone/></center>
            </span>
            <span className="clockWall"><AnalogClock title="Anchorage, Alaska" datediff={-4} />
            <br/> <center><AlaskaTimeZone/></center>
            </span>
            <span className="clockWall" id="hawaii"><AnalogClock title="Honolulu, Hawaii" datediff={-5} />
            <br/> <center><HawaiiTimeZone/></center>
            </span>
        </div>
        </>
    )
}

export default LandingPage;