import React, { useState } from "react"
import Card from './Card'

export default function Main(props) {
    return (
        <div id='main'>
            <Card {...props} />
        </div>
    )
}