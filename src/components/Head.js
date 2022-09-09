import React, { useState } from "react"

export default function Head(props) {
    return (
        <div id='head'>
            <div id='background'></div>
            <div id='info'>
                <p id='instructions'>Instructions: Test your memory by clicking a card only once.</p>
                <div id='score'>
                    <p>Score: {props.score}</p>
                    <p>Best Score: {props.bestScore}</p>
                </div>
            </div>
        </div>
    )
}