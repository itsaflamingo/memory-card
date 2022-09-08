import React, { useState } from "react"

export default function Head(props) {
    return (
        <div className="cards">
            {props.pics.map((pic) => {
                return (
                    <div className="card" id={pic.id} key={pic.id} onClick={props.onClick} style={{
                        backgroundImage: `url(${pic.url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3 id='name'>{pic.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}