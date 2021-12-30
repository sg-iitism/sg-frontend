import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsComponent = lazy(() => import("../../components/Fests"));

const Fests = () => {
  return (
    <Container>
      <ScrollToTop />
      <FestsComponent />
    </Container>
  );
};

export default Fests;
