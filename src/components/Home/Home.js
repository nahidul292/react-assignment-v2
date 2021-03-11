import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then (res => res.json())
        .then (data => setTeams(data.teams))
    }, [])
    // const featuredImage ={
    //     backgroundImage: `url("https://mdbootstrap.com/img/new/slides/003.jpg")`,
    //     height: "200px",
    //     color: "white"
    // }
    
    return (
        <div>
            <div>
                <div className="bg-image p-5 text-center shadow-5-strong rounded mb-5 text-white" 
                style={{backgroundImage: `url("https://i.imgur.com/MNg0vCB.jpg")`, height: "350px", width: "100%"}}>
                <h1 className="mb-3 h2" style={{fontSize: "50px" , fontWeight: "bold"}}>Sports Royal</h1>
                <p style={{fontSize: "40px"}}>Total teams in this league: {teams.length}</p>
                </div>
            </div>
            <div className="row" >
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>      
        </div>
    );
};

export default Home;