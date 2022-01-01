import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const ContactComponent = () => {
  return (
    <Container>
      <ScrollToTop />
      <Contact />
    </Container>
  );
};

export default ContactComponent;
