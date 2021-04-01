import TitleSection from "../molecules/TitleSection";

function NextMeetup({ meetups }) {
  return (
    <div>
      <TitleSection title1="Next Meetups" />
      <div
        style={{
          backgroundColor: "#C4C4C4",
          padding: "10px",
          marginLeft: "20px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Awsome Meetup and Event</p>
        <p style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit per, aliquet
          primis dapibus egestas faucibus orci magnis a conubia, maecenas proin
          magna habitasse dis enim interdum. Fringilla mauris tincidunt potenti
          diam scelerisque curabitur facilisis odio lacinia taciti ligula
          nascetur, pellentesque dis donec sem aenean imperdiet aptent nunc
          nullam condimentum. Arcu metus et dictumst auctor fusce, cras
          hendrerit torquent litora. Nam ac duis faucibus ultricies aenean
          dictum pellentesque erat enim, facilisis phasellus pretium cras
          eleifend placerat morbi ante lacinia rhoncus, augue scelerisque turpis
          taciti iaculis vehicula quis curae.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit per,
        </p>
        <p>---</p>
        <p style={{ fontWeight: "bold" }}>See you there!</p>
        <p style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit per,
        </p>
      </div>
    </div>
  );
}

export default NextMeetup;
