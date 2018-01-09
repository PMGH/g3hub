import React from 'react';
import ProfileInfo from './ProfileInfo';

class Profiles extends React.Component {
  render(){
    console.log("profiles: ", this.props.profiles);
    const profiles= this.props.profiles.map((profile, index) => {
      console.log("In map " + profile);
      let image = <img className="user-avatar" value={index} key={index} src={profile.avatar_url} alt="GitHub Avatar Image"/>

      let name = <p className="user-name">{profile.login}</p>

      return <article className="profile-article">{image}{name}</article>
    });
    console.log("rendering");
    console.log({profiles});
    return (
      <section id="profile-section">
        {profiles}
      </section>
    );
  }
}


export default Profiles;
