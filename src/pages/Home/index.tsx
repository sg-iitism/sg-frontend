import { lazy } from "react";
import { Row, Col } from "antd";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import SocietiesContent from "../../content/SocietiesContent.json";
import ClubsContent from "../../content/ClubsContent.json";

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
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        link={MiddleBlockContent.link}
      />
      <ContentBlock
        type="left"
        title={SocietiesContent.title}
        content={SocietiesContent.text}
        section={SocietiesContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={ClubsContent.title}
        content={ClubsContent.text}
        button={ClubsContent.button}
        icon="product-launch.svg"
        id="mission"
      />
      <Fests />
    </Container>
  );
};

export default Home;
