import { lazy } from "react";
import SrijanContent from "../../content/SrijanContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsDetail = lazy(() => import("../../components/FestsDetail"));

const Srijan = () => {
  return (
    <Container>
      <ScrollToTop />
      <FestsDetail
        title={SrijanContent.title}
        description={SrijanContent.description}
        logo={SrijanContent.logo}
        events={SrijanContent.events}
        id="Srijan"
        links={SrijanContent.links}
        gallery={SrijanContent.gallery}
      />
    </Container>
  );
};

export default Srijan;
