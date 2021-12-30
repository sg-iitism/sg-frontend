import { lazy } from "react";
import ParakramArchive from "../../content/ParakramArchive.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsArchive = lazy(() => import("../../components/FestsArchive"));

const Parakram = () => {
  return (
    <Container>
      <ScrollToTop />
      <FestsArchive
        title={ParakramArchive.title}
        description={ParakramArchive.description}
        logo={ParakramArchive.logo}
        events={ParakramArchive.events}
        id="Parakram"
        links={ParakramArchive.links}
        gallery={ParakramArchive.gallery}
        name={ParakramArchive.name}
        youtube={ParakramArchive.youtube}
      />
    </Container>
  );
};

export default Parakram;
