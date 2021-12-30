import { lazy } from "react";

const AboutComponent = lazy(() => import("../../components/About"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const About = () => {
  return (
    <Container>
      <ScrollToTop />
      <AboutComponent />
    </Container>
  );
};

export default About;
