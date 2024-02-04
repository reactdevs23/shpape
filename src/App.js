import MainComponent from "./components/MaiComponent/MainComponent";
import {
  file,
  nLogo,
  notepad,
  pdfLogo,
  pythonLogo,
  sales,
  slick,
  sql,
  youtube,
} from "./images";

import Recentgular from "./images/SvgComponents/Recentgular";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    bgColor: "#000",
    primaryColor: "#fff",
    container: (
      <Recentgular
        firstColor="#9471cd"
        secondColor="#7a5aa5"
        thirdColor="#00163a"
        fourthColor="#5563cf"
      />
    ),
    centerImage: nLogo,
    data: [
      {
        icon: pythonLogo,
        highlight: false,

        border: "3px solid #6b707b",
        highlightBorder: "3px dashed #c01b24",
      },
      {
        icon: pdfLogo,
        highlight: true,

        border: "3px solid #6b707b",
        highlightBorder: "3px dashed #c01b24",
      },
      {
        icon: sql,
        highlight: true,

        border: "3px solid #6c7079",
        highlightBorder: "3px dashed #db7533",
      },
      {
        icon: nLogo,
        highlight: true,

        border: "3px solid #69717a",
        highlightBorder: "3px dashed #F1F1F2",
      },
      {
        icon: notepad,
        highlight: false,

        border: "3px solid #6c7079",
        highlightBorder: "3px dashed #21a366",
      },
      {
        icon: sales,
        highlight: true,

        border: "3px solid #6b7178",
        highlightBorder: "3px dashed #00A1E0",
      },
      {
        icon: slick,
        highlight: false,

        border: "3px solid #6b7178",
        highlightBorder: "3px dashed #E01E5A",
      },
      {
        icon: youtube,
        highlight: false,

        border: "3px solid #6b7178",
        highlightBorder: "3px dashed #c01b24",
      },
      {
        icon: file,
        highlight: false,
        border: "3px solid #6b7178",
        highlightBorder: "3px dashed #508ef5",
      },
    ],
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--bgColor": allData.bgColor,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
