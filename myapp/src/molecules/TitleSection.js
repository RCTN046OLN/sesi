function TitleSection({ title1, title2, isTitle2 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginRight: "20px",
      }}
    >
      <p style={{ fontWeight: "bold" }}>{title1}</p>
      {isTitle2 && <p>{title2}</p>}
    </div>
  );
}

export default TitleSection;
