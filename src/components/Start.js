import React, { useState } from "react"

export default function Start() {
    return (
        <div id='start' className="popup">
            <div id='info'>
                <h4>INSTRUCTIONS</h4>
                <p>
                    Collect points by clicking an image. Don't click on it more than once! 
                </p>
            </div>
            <button id='start'>Start</button>
        </div>
    )
}