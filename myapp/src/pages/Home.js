import { Component } from "react";
import AboutMeetup from "../organisms/AboutMeetup";
import Header from "../organisms/Header";
import MeetupList from "../organisms/MeetupList";
import NextMeetup from "../organisms/NextMeetup";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      meetups: [
        {
          id: 1,
          date: "20 November 2017",
          name: "#39 JakartaJs April Meetup with Kumparan",
          went: 139,
        },
        {
          id: 2,
          date: "20 October 2017",
          name: "#38 JakartaJs April Meetup with Blibli",
          went: 113,
        },
        {
          id: 3,
          date: "20 September 2017",
          name: "#37 JakartaJs April Meetup with Hacktiv8",
          went: 110,
        },
      ],
    };
  }
  render() {
    return (
      <div
        style={{
          border: " solid 1px",
          padding: "10px",
          marginLeft: "100px",
          marginRight: "100px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Header />
        <NextMeetup />
        <AboutMeetup />
        <MeetupList meetups={this.state.meetups} />
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            borderTop: "solid 1px",
            marginLeft: "20px",
            marginRight: "20px",
            padding: "20px",
          }}
        >
          <p>Copyright Hacktiv8 2018</p>
        </div>
      </div>
    );
  }
}

export default Home;
