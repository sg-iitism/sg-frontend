import { lazy } from "react";
import RoboismContent from "../../content/RoboismContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ClubDetails = lazy(() => import("../../components/ClubDetails"));

const Roboism = () => {
  return (
    <Container>
      <ScrollToTop />
      <ClubDetails
        title={RoboismContent.title}
        description={RoboismContent.description}
        logo={RoboismContent.logo}
        events={RoboismContent.events}
        id="Roboism"
        links={RoboismContent.links}
        achievements={RoboismContent.achievements}
        coordis={RoboismContent.coordis}
      />
    </Container>
  );
};

export default Roboism;
