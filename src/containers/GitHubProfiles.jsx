import React from 'react';
import Profiles from '../components/Profiles';
import ProfileInfo from '../components/ProfileInfo';

class GitHubProfiles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usernames: [ "hdpuk86", "ShetlandJ", "ajrussellaudio", "johncruickshank", "johnmcc", "axolotlquestions", "reidch", "chad-tung", "PMGH", "alistairkane92", "ClareBee", "JamieSK", "jamiesime", "LouiseReid", "smrr723", "kulisfunk", "AMacFadyen", "amcgilloway", "futuresocks", "findsay", "MichaelCSlevin", "StevenMeiklejohn" ],
      profiles: [],
      selectedProfiles: null
    };
  }

  componentDidMount(){
    const oauth = "b04ee7409f42c95725d16a2a69bc4be639772b01";
    for (let user of this.state.usernames){
      let url = `https://api.github.com/users/${user}?access_token=${oauth}`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener("load", () => {
        if (xhr.status !== 200){
          return console.log("request failed");
        } else {
          console.log("request successful");
          let jsonString = xhr.responseText;
          let userData = JSON.parse(jsonString);
          console.log(userData);
          this.setState(prevState => {
            return {profiles: prevState.profiles.concat(userData)};
          });
        }
      });
      xhr.send();
    }

  }

  render(){
    return (
      <React.Fragment>
        <h1>G3 GitHub Profiles</h1>
        <Profiles profiles={this.state.profiles} />
        <ProfileInfo />
      </React.Fragment>
    );
  }
}

export default GitHubProfiles
