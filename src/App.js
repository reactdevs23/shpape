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
import HighlightedLine1 from "./images/SvgComponents/Highlighted/HighlightedLine1";
import HighlightedLine2 from "./images/SvgComponents/Highlighted/HighlightedLine2";
import HighlightedLine4 from "./images/SvgComponents/Highlighted/HighlightedLine4";
import HighlightedLine5 from "./images/SvgComponents/Highlighted/HighlightedLine5";
import HighlightedLine6 from "./images/SvgComponents/Highlighted/HighlightedLine6";
import HighlightedLine7 from "./images/SvgComponents/Highlighted/HighlightedLine7";
import HighlightedLine8 from "./images/SvgComponents/Highlighted/HighlightedLine8";
import HighlightedLine9 from "./images/SvgComponents/Highlighted/HighlightedLine9";
import HightlightedLine3 from "./images/SvgComponents/Highlighted/HightlightedLine3";
import Line from "./images/SvgComponents/Line";
import Line2 from "./images/SvgComponents/Line2";
import Line3 from "./images/SvgComponents/Line3";
import Line4 from "./images/SvgComponents/Line4";
import Line5 from "./images/SvgComponents/Line5";
import Line6 from "./images/SvgComponents/Line6";
import Line7 from "./images/SvgComponents/Line7";
import Line8 from "./images/SvgComponents/Line8";
import Line9 from "./images/SvgComponents/Line9";
import Recentgular from "./images/SvgComponents/Recentgular";

function App() {
  const data = {
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
    first: {
      icon: pythonLogo,
      highlight: false,
      line: <Line color="#6c7079" />,
      highlightedLine: <HighlightedLine1 color="#d35230" />,
    },
    second: {
      icon: pdfLogo,
      highlight: false,
      line: <Line2 color="#6b707b" />,
      highlightedLine: <HighlightedLine2 color="#c01b24" />,
    },
    third: {
      icon: sql,
      highlight: true,
      line: <Line3 color="#6c7079" />,
      highlightedLine: <HightlightedLine3 color="#db7533" />,
    },
    fourth: {
      icon: nLogo,
      highlight: true,
      line: <Line4 color="#69717a" />,
      highlightedLine: <HighlightedLine4 color="#F1F1F2" />,
    },
    fifth: {
      icon: notepad,
      highlight: false,
      line: <Line5 color="#6c7079" />,
      highlightedLine: <HighlightedLine5 color="#21a366" />,
    },
    sixth: {
      icon: sales,
      highlight: true,
      line: <Line6 color="#6b7178" />,
      highlightedLine: <HighlightedLine6 color="#00A1E0" />,
    },
    seventh: {
      icon: slick,
      highlight: false,
      line: <Line7 color="#6b7178" />,
      highlightedLine: <HighlightedLine7 color="#E01E5A" />,
    },
    eighth: {
      icon: youtube,
      highlight: false,
      line: <Line8 color="#6b7178" />,
      highlightedLine: <HighlightedLine8 color="red" />,
    },
    ninth: {
      icon: file,
      highlight: false,
      line: <Line9 color="#6b7178" />,
      highlightedLine: <HighlightedLine9 color="#508ef5" />,
    },
  };
  return (
    <div
      style={{
        "--primaryColor": data.primaryColor,
        "--bgColor": data.bgColor,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
