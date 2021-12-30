import { lazy } from "react";
import ParakramContent from "../../content/ParakramContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsDetail = lazy(() => import("../../components/FestsDetail"));

const Parakram = () => {
  return (
    <Container>
      <ScrollToTop />
      <FestsDetail
        title={ParakramContent.title}
        description={ParakramContent.description}
        logo={ParakramContent.logo}
        events={ParakramContent.events}
        id="Srijan"
        links={ParakramContent.links}
        gallery={ParakramContent.gallery}
        years={ParakramContent.years}
        name={ParakramContent.name}
      />
    </Container>
  );
};

export default Parakram;
