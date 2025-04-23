import React from "react";
import './App.css'
import TeamMember from './components/TeamMemberCard'

function App (){
  const students = [
    {
      id:1,
      name:"John Doe",
      title:"Software Engineer"
    },
    {
      id:2,
      name:"Mike",
      title:"Software Engineer"
    },
    {
      id:3,
      name:"Kayl",
      title:"Software Engineer"
    }
  ]

  return(
    <div className="container">
      <h1>SERVICES</h1>
      <div className="div1">
      {
        students.map((student)=>(
          <div className="div2">
            <TeamMember key={student.id} name={student.name} title={student.title} />
          </div>
        ))
      }
      </div>

    </div>
  )
}

export default App