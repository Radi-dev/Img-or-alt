import ImgOrAlt from "./ImgOrAlt.js";

function App() {
  return (
    <div
      style={{
        display: "grid",
        "justify-content": "center",
        gap: 30,
        height: 500,
      }}
    >
      <ImgOrAlt
        src="i.jpg"
        alt="radius 25px"
        style={{
          "border-radius": 25,
          "margin-top": 10,
          "margin-bottom": 10,
        }}
      />

      <ImgOrAlt src="path/to/image" alt="No path entered" />
      <ImgOrAlt
        src="i.jpg"
        alt="img with 3px solid black border, radius 15px"
        style={{ "border-radius": 15, border: "3px solid black" }}
      />
    </div>
  );
}

export default App;
