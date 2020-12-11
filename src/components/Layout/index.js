import React, { Component } from 'react'
import CountryList from "../CountryList";
import SelectedCountry from "../SelectedCountry";


const countrydata = [
    {
        "country": "India",
        "states": [
            "Uttarakhand",
            "Himanchal",
            "Delhi"
        ]
    },
    {
        "country": "Australia",
        "states": [
            "South Australia",
            "Victoria",
            "Tasmania"
        ]
    },
    {
        "country": "Portugal",
        "states": [
            "Alentejo",
            "Douro Litoral",
            "Estremadura"
        ]
    }
]



export default class Layout extends Component {

    constructor() {
        super();
        this.state = {
            contryData: countrydata,
        }
    }


    render() {
        return (
            <section className="layoutContainer d-flex align-items-center position-relative">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>

                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-6">
                            <div class="bg-white p-3 rounded  layoutItem">
                                <CountryList
                                    data={this.state.contryData} />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div class="bg-white p-3 rounded  position-relative layoutItem">
                                <SelectedCountry />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
