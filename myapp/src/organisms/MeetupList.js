import Card from "../molecules/Card";
import TitleSection from "../molecules/TitleSection";

function MeetupList({ meetups }) {
  return (
    <div>
      <TitleSection title1="Past Meetups" isTitle2 title2="See all" />
      <div style={{ marginLeft: "20px", display: "flex" }}>
        {meetups.map((meetup) => (
          <Card key={meetup.id} meetup={meetup} />
        ))}
      </div>
    </div>
  );
}

export default MeetupList;
