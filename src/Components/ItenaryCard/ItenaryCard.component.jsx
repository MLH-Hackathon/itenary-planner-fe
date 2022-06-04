import React from 'react'

const ItenaryCard = (props) => {
    const data = [{
        "id": 1,
        "text": "Devpulse"
    }, {
        "id": 2,
        "text": "Linklinks"
    }, {
        "id": 3,
        "text": "Centizu"
    }, {
        "id": 4,
        "text": "Dynabox"
    }, {
        "id": 5,
        "text": "Avaveo"
    }, {
        "id": 6,
        "text": "Demivee"
    }, {
        "id": 7,
        "text": "Jayo"
    }, {
        "id": 8,
        "text": "Blognation"
    }, {
        "id": 9,
        "text": "Podcat"
    }, {
        "id": 10,
        "text": "Layo"
    }] 
    const filteredData = data.filter((loc) => {
        if (props.input === '') {
            return loc;
        }
        else {
            return loc.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default ItenaryCard
