import { lazy } from "react";
import ConcettoContent from "../../content/ConcettoContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsDetail= lazy(() => import("../../components/FestsDetail"));

const FestDetails = () => {
  return (
    <Container>
      <ScrollToTop />
      <FestsDetail
        title={ConcettoContent.title}
        description={ConcettoContent.description}
        logo={ConcettoContent.logo}
        events={ConcettoContent.events}
        id="Srijan"
        links={ConcettoContent.links}
        gallery={ConcettoContent.gallery}
        years={ConcettoContent.years}
        name={ConcettoContent.name}
      />
    </Container>
  );
};

export default FestDetails;