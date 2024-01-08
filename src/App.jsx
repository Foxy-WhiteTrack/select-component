import React, { useState } from 'react';
import Select from './lib/components/Select';

import { datas } from "./lib/datas/datas";

export default function App() {

    const firstState = datas[0].abbreviation;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: firstState,
        zipCode: "",
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="App">
            <Select
                id="state"
                label="State"
                options={datas}
                haveLabel={true}
                name="state"
                value={formData.state}
                onChange={onChange}
            />
        </div>
    );
}
