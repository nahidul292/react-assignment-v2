import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../TeamDetails/TeamDetails.css';
import MaleImage from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView, faFlagCheckered, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
const TeamDetails = () => {
    const { idTeam } = useParams();
    const [ team,setTeam ] = useState({});
    const {strTeam,strTeamBanner,strTeamJersey,strTeamLogo,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strFacebook,strTwitter,strYoutube} = team;
    const fbUrl = `https://${strFacebook}`;
    const twitterUrl = `https://${strTwitter}`;
    const youtubeUrl =`https://${strYoutube}`;

    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
        window.scrollTo(0,0);
    }, [idTeam]);

    let styles = {
        backgroundImage: `url(${strTeamBanner})`,
        backgroundSize: 'cover',
        backgroundRepeat  : 'no-repeat',
        overflow: 'hidden'
    }
    return (
        <div className="team-details-container ">
            <div className="row justify-content-center team-banner" style ={styles}>
                <img className="team-badge" src={strTeamLogo} alt="" />
            </div>
            <div className="row justify-content-between d-flex align-items-center team-details-block">
                <div className="col-md-6 team-details">
                    <h3>English Premier League - {strTeam}</h3>
                    <br/>
                    <p><FontAwesomeIcon icon={faStreetView}  /><strong>  Founded<small>(year)</small> : {intFormedYear}</strong></p>
                    <p><FontAwesomeIcon icon={faFlagCheckered}  /><strong>  Country : {strCountry}</strong></p>
                    <p><FontAwesomeIcon icon={faFutbol}  /><strong>  Sports type : {strSport}</strong></p>
                    <p><FontAwesomeIcon icon={faMarsStroke}  /><strong>  Gender : {strGender}</strong></p>
                </div>

                {/* Display image conditionally on Gender -using ternary operator */}
                <div className="col-md-6 team-image">
                    {
                        strGender==='Male' ? <img src={MaleImage} alt="" className="img-fluid"/> : <img src="" alt=""/>
                    }
                </div>
            </div>
            <div className="team-data">
                <h4>Team Details: </h4>
                <div className="row">
                    <div className="col-md-9 details">
                        <p style={{textAlign: "justify"}}>{strDescriptionEN}</p>
                    </div>
                    <div className="col-md-3 jersey">
                        <img src={strTeamJersey} alt=""/>
                        <p className="text-center"><strong>Jersey</strong></p>
                    </div>
                </div>
                <br/>
                <p className="row justify-content-center"><strong>Connect socially</strong></p>
                <div className="row justify-content-center">
                    {/* <a href={twitterUrl} target="_blank"><FontAwesomeIcon icon={faTwitter} className="social" /></a>
                    <a href={fbUrl} target="_blank"><FontAwesomeIcon icon={faFacebook} className="social" /></a>
                    <a href={youtubeUrl} target="_blank"><FontAwesomeIcon icon={faYoutube} className="social" /></a> */}
                    <a href={fbUrl} target="_blank"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt=""/></a>
                    <a href={twitterUrl} target="_blank"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter2_colored_svg-512.png" alt=""/></a>
                    <a href={youtubeUrl} target="_blank"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png" alt=""/></a>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default TeamDetails;