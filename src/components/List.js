import React from "react";
import "./List.css";
import Filter from './Filter.js';
import map from 'lodash/map';

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Rockets: [], // To Store the Extracted Rocket List
            missionName: '', // To Store the Extracted Mission Name
            missionID: '', // To Store the Extracted Mission ID
            launchFitler: '', // To Store the Current launch Fitler Value
            landFitler: '', // To Store the Current Land Success Or Failure Fitler Value
            launchYearFitler: '', // To Store the Current launch Year Fitler Value
        };

        this.handlelaunchyear = this.handlelaunchyear.bind(this);
        this.handlelaunch = this.handlelaunch.bind(this);
        this.handlelanding = this.handlelanding.bind(this);

    }

    componentDidMount() {

        //To Load Default Rocket List From API

        var listRockets = [];
        (async () => {

            let response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                alert("Success");
                var commits = await response.json();

                // To Store the Extracted Mission
                for (var i = 0; i < commits.length; i++) {
                    //console.log(commits[i]);
                    listRockets.push(commits[i]);
                }
                console.log(listRockets);
                this.setState({ Rockets: listRockets })
            }
            else {
                alert("Failed");
            }

        })();
    }

    handlelaunchyear(e) {
        alert(e);
        var launchYearFitler = e;
        var listRockets = [];
        (async () => {

            let response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.launchFitler}&land_success=${this.state.landFitler}&launch_year=${launchYearFitler}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                alert("Success");
                var commits = await response.json();

                // To Store the Extracted Mission
                for (var i = 0; i < commits.length; i++) {
                    //console.log(commits[i]);
                    listRockets.push(commits[i]);
                }
                console.log(listRockets);
                this.setState({ Rockets: listRockets })
            }
            else {
                alert("Failed");
            }

        })();

        this.setState({ launchYearFitler: launchYearFitler }) //Setting the launch year fitler value in state
    }

    handlelaunch(e) {
        alert(e);

        var launchFitler = e;

        var listRockets = [];
        (async () => {

            let response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchFitler}&land_success=${this.state.landFitler}&launch_year=${this.state.launchYearFitler}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                alert("Success");
                var commits = await response.json();

                // To Store the Extracted Mission
                for (var i = 0; i < commits.length; i++) {
                    //console.log(commits[i]);
                    listRockets.push(commits[i]);
                }
                console.log(listRockets);
                this.setState({ Rockets: listRockets })
            }
            else {
                alert("Failed");
            }

        })();

        this.setState({ launchFitler: launchFitler }); //Setting the launching fitler value in state
    }

    handlelanding(e) {
        alert(e);

        var landFitler = e;

        var listRockets = [];
        (async () => {

            let response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.launchFitler}&land_success=${landFitler}&launch_year=${this.state.launchYearFitler}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                alert("Success");
                var commits = await response.json();

                // To Store the Extracted Mission
                for (var i = 0; i < commits.length; i++) {
                    //console.log(commits[i]);
                    listRockets.push(commits[i]);
                }
                console.log(listRockets);
                this.setState({ Rockets: listRockets })
            }
            else {
                alert("Failed");
            }

        })();

        this.setState({ landFitler: landFitler }); //Setting the landing fitler value in state
    }


    render() {
        return (
            // Start of Root Div
            <div>
                <div class="container-fluid">
                    <div class="row">
                        {/*View List Starts*/}
                        <div class="filter-section">
                            <Filter launchyear={this.handlelaunchyear} launch={this.handlelaunch} landing={this.handlelanding} />
                        </div>
                        {/*View List Ends*/}
                        {/* Display Section of Product List Starts*/}
                        <div class="rocket-section">
                            <div className="row">
                                {map(this.state.Rockets, (rocketitem) => (
                                    <div className="column-rocket">
                                        <div key={rocketitem.mission_name} className="item">
                                            <div className="rocket-img">
                                                <img alt={rocketitem.mission_name} src={rocketitem.links.mission_patch} />
                                            </div>
                                            <div className="rocket-details">
                                                <h4 id="rocket-name">{rocketitem.mission_name}</h4>
                                            </div>
                                            <div className="rocket-id">
                                                <h4 id="rocket-id">Mission IDs: {rocketitem.mission_id}</h4>
                                            </div>
                                            <div className="rocket-launch_year">
                                                <h4 id="rocket-launch_year">Launch Year: {rocketitem.launch_year}</h4>
                                            </div>
                                            <div className="rocket-sucessful-launch">
                                                <h4 id="rocket-sucessful-launch">Successful Launch: {rocketitem.launch_success}</h4>
                                            </div>
                                            <div className="rocket-sucessful-landing">
                                                <h4 id="rocket-sucessful-landing">Successful Landing: {rocketitem.rocket.first_stage.cores[0].land_success}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Display Section of Rocket List Ends*/}
                    </div>
                </div>
            </div> // End of Root Div
        )
    }
}
export default List;