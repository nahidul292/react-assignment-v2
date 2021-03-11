import React from 'react';
import { useHistory } from 'react-router';
import '../Team/Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
    const history = useHistory();
    const handleTeamDetail = (idTeam) => {
        const url = (`/team/${idTeam}`);
        history.push(url);
    }
    return (
        <div className="col-md-4">
            <div className="team-container ">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={strTeamBadge} className="card-img-top align-self-center" alt="..." />
                    <div className="card-body text-center ">
                        <h5 className="card-title">{strTeam}</h5>
                        <p>Sports type: {strSport}</p>
                        <button onClick={() => handleTeamDetail(idTeam)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Team;