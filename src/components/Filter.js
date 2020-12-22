import React from "react";
import "./Filter.css";

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.launchyearhandleInput = this.launchyearhandleInput.bind(this);
        this.launchhandleInput = this.launchhandleInput.bind(this);
        this.landinghandleInput = this.landinghandleInput.bind(this);
    }

    //Props
    launchyearhandleInput(e) {
        alert(e.target.value);
        this.props.launchyear(e.target.value);  //Passing launch year as props from child to parent
    }

    launchhandleInput(e) {
        alert(e.target.value);
        this.props.launch(e.target.value);   //Passing launch filter value as props from child to parent
    }

    landinghandleInput(e) {
        alert(e.target.value);
        this.props.landing(e.target.value);  //Passing landing filter value as props from child to parent
    }

    render() {
        return (
            // Start of Root Div
            <div>
                <p className="filter-heading filter-main-heading">Filters</p>
                {/*Event Bubbling 
                   Thats why outermost div is being checked for click instead of each button
                */}
                <p className="filter-heading">Launch Year</p>
                <div className="article-container launch-year" onClick={e => this.launchyearhandleInput(e, "value")}>
                    <div className="row">
                        <div class="article">
                            <button type="button" className="btn btn-success" value="2006">2006</button>
                            <button type="button" className="btn btn-success" value="2008">2008</button>
                            <button type="button" className="btn btn-success" value="2010">2010</button>
                            <button type="button" className="btn btn-success" value="2012">2012</button>
                            <button type="button" className="btn btn-success" value="2014">2014</button>
                            <button type="button" className="btn btn-success" value="2016">2016</button>
                            <button type="button" className="btn btn-success" value="2018">2018</button>
                            <button type="button" className="btn btn-success" value="2020"> 2020</button>
                        </div>
                        <div className="article">
                            <button type="button" className="btn btn-success" value="2007">2007</button>
                            <button type="button" className="btn btn-success" value="2009">2009</button>
                            <button type="button" className="btn btn-success" value="2011">2011</button>
                            <button type="button" className="btn btn-success" value="2013">2013</button>
                            <button type="button" className="btn btn-success" value="2015">2015</button>
                            <button type="button" className="btn btn-success" value="2017">2017</button>
                            <button type="button" className="btn btn-success" value="2019">2019</button>
                        </div>
                    </div>
                </div>

                {/*Event Bubbling 
                   Thats why outermost div is being checked for click instead of each button
                */}
                <p className="filter-heading">Successful Landing</p>
                <div className="article-container successful-launch" onClick={e => this.launchhandleInput(e, "value")}>
                    <div className="article">
                        <button type="button" className="btn btn-success" value="true">True</button>
                    </div>
                    <div className="article">
                        <button type="button" className="btn btn-success" value="false">False</button>
                    </div>
                </div>

                {/*Event Bubbling 
                   Thats why outermost div is being checked for click instead of each button
                */}
                 <p className="filter-heading">Successful Landing</p>
                <div className="article-container successful-landing" onClick={e => this.landinghandleInput(e, "value")}>
                    <div className="article">
                        <button type="button" className="btn btn-success" value="true">True</button>
                    </div>
                    <div className="article">
                        <button type="button" className="btn btn-success" value="false">False</button>
                    </div>
                </div>

            </div>

        )
    }
}
export default Filter;