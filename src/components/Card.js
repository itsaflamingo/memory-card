import React from "react"

export default function Head(props) {
    return (
        <div className="cards">
            {props.pictures.map((pic) => {
                return (
                    <div className="outer-card" key={pic.id}>
                        <div className="card" onClick={props.onClick} style={{
                            backgroundImage: `url(${pic.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        </div>
                        <h3 id='name'>{pic.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}