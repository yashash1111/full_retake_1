import React from "react";



function TeamMember({name,title}){
    return(
        <div>
        <h1>Name:</h1>
        <h2 className="name">{name}</h2>
        <h1>Title:</h1>
        <h2 className="title">{title}</h2>
        </div>
    )
}

export default TeamMember