import React from "react"

export default function Card(props){
    return (
    <div className="card">
    <img className="image--" src={props.item.image} alt=""/> 
    <div className="card==list">
        <div className="card==items">
            <span><i class="fa fa-map-marker" aria-hidden="true"></i>{props.location}<span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank"  rel="noreferrer" >Visit location on google maps!</a> </span></span>
           < h2>{props.item.title}</h2>
        </div>
        <div className="dates">
            <span>{props.item.startDate}</span>
            <span> - {props.item.endDate}</span>
            <p>{props.item.description}</p>
        </div>
    </div>
    </div>

    )
}
