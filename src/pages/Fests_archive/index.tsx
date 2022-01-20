import { lazy } from "react";
import ConcettoArchive from "../../content/ConcettoArchive.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsArchive = lazy(() => import("../../components/FestsArchive"));

const Concetto = () => {
  return (
    <Container>
      <ScrollToTop />
      <FestsArchive
        title={ConcettoArchive.title}
        description={ConcettoArchive.description}
        logo={ConcettoArchive.logo}
        events={ConcettoArchive.events}
        id="Concetto"
        links={ConcettoArchive.links}
        gallery={ConcettoArchive.gallery}
        name={ConcettoArchive.name}
        youtube={ConcettoArchive.youtube}
      />
    </Container>
  );
};

export default Concetto;
