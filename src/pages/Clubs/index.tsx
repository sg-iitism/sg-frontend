import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ClubsComponent = lazy(() => import("../../components/Clubs"));

const Fests = () => {
  return (
    <Container>
      <ScrollToTop />
      <ClubsComponent />
    </Container>
  );
};

export default Fests;
