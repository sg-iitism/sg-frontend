import { lazy } from "react";
import { Row, Col } from "antd";
import { Helmet } from "react-helmet";
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
const Announcements = lazy(() => import("../../components/Announcements"));
const Achievements = lazy(() => import("../../components/Achievements"));
const CarouselComponent = lazy(() => import("../../components/CarouselComponent"));

const Home = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Student Gymkhana - IIT(ISM) Dhanbad</title>
        <meta name="description" content="Student Gymkhana IIT(ISM) Dhanbad" />
        <meta property="og:title" content="Student Gymkahana | IIT(ISM) Dhanbad" />
        <meta property="og:url" content={"https://sg-iitism.herokuapp.com/"} />
        <meta property="og:description" content="Student Gymkhana of IIT(ISM) Dhanbad" />
        <meta name="keywords" content="Student Gymkhana IIT(ISM) Dhanbad Clubs" />
      </Helmet>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        fullContent={IntroContent.fullText}
        newPage={IntroContent.newPage}
        typewriter={IntroContent.typewriter}
        typeStyle={IntroContent.typeStyle}
        icon="heritage-building-ism.jpg"
        id="intro"
      />
      {/* <CarouselComponent /> */}
      <Row justify="space-between">
        <Col lg={15} md={12} sm={24} xs={24}>
          <MiddleBlock
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
            button={MiddleBlockContent.button}
            link={MiddleBlockContent.link}
            newPage={MiddleBlockContent.newPage}
            id="about"
          />
        </Col>
        <Col lg={9} md={12} sm={24} xs={24}>
          <Announcements />
        </Col>
      </Row>
      <Achievements />
      <ContentBlock
        type="left"
        title={FestsContent.title}
        content={FestsContent.text}
        newPage={FestsContent.newPage}
        button={FestsContent.button}
        icon="fests.svg"
        id="fests"
      />
      <ContentBlock
        type="right"
        title={ClubsContent.title}
        content={ClubsContent.text}
        button={ClubsContent.button}
        icon="product-launch.svg"
        id="clubs"
      />
      <ContentBlock
        type="left"
        title={CulturalContent.title}
        content={CulturalContent.text}
        button={CulturalContent.button}
        icon="cult_clubs.svg"
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
