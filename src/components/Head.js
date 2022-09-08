import React, { useState } from "react"

export default function Head(props) {
    return (
        <div id='head'>
            <div id='score'>
                <p>Score: {props.score}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </div>
    )
}