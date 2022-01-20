import { lazy } from "react";
import ChayanikaContent from "../../content/ChayanikaContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ClubDetails = lazy(() => import("../../components/ClubDetails"));

const ClubDetail = () => {
  return (
    <Container>
      <ScrollToTop />
      <ClubDetails
        title={ChayanikaContent.title}
        description={ChayanikaContent.description}
        logo={ChayanikaContent.logo}
        events={ChayanikaContent.events}
        id="Chayanika"
        links={ChayanikaContent.links}
        achievements={ChayanikaContent.achievements}
        coordis={ChayanikaContent.coordis}
      />
    </Container>
  );
};

export default ClubDetail;
