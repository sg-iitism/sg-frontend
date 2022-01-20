import { lazy } from "react";
import { Row, Col } from "antd";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import FestsContent from "../../content/FestsContent.json";
import ClubsContent from "../../content/ClubsContent.json";
import CulturalContent from "../../content/CulturalContent.json";
import SportsContent from "../../content/SportsContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Fests = lazy(() => import("../../components/Fests"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        fullContent={IntroContent.fullText}
        newPage={IntroContent.newPage}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        link={MiddleBlockContent.link}
        newPage={MiddleBlockContent.newPage}
        id="about"
      />
      <ContentBlock
        type="left"
        title={FestsContent.title}
        content={FestsContent.text}
        newPage={FestsContent.newPage}
        button={FestsContent.button}
        icon="graphs.svg"
        id=""
      />
      <ContentBlock
        type="right"
        title={ClubsContent.title}
        content={ClubsContent.text}
        button={ClubsContent.button}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={CulturalContent.title}
        content={CulturalContent.text}
        button={CulturalContent.button}
        icon="waving.svg"
        id=""
      />
      <ContentBlock
        type="right"
        title={SportsContent.title}
        content={SportsContent.text}
        button={SportsContent.button}
        newPage={SportsContent.newPage}
        icon="sports.svg"
        id="mission"
      />
      {/* <Fests /> */}
    </Container>
  );
};

export default Home;
