import { lazy } from "react";

const SenateComponent = lazy(() => import("../../components/Senate"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Senate = () => {
  return (
    <Container>
      <ScrollToTop />
      <SenateComponent />
    </Container>
  );
};

export default Senate;
