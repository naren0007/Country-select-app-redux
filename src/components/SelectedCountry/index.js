import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import SelectedListBlock from "../SelectedListBlock";

export default function SelectedCountry() {

    const selectedCountry = useSelector((state) => state.app.selectedCountry);

    const [selectedContryList, setSelectedContryList] = useState([]);


    useEffect(() => {
        setSelectedContryList(selectedCountry);
    }, [selectedCountry, selectedContryList]);


    return (
        <>
            {selectedContryList?.length ?
                selectedContryList.map((country) => (
                    <SelectedListBlock data={country} />
                ))
                : <p class="text-center position-absolute noValueSelected">No Value Selected</p>}
        </>
    )
}
