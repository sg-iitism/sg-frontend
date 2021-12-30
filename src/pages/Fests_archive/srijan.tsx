import { lazy, useState, useEffect } from "react";
import SrijanArchive from "../../content/SrijanArchive.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FestsArchive = lazy(() => import("../../components/FestsArchive"));

const url = window.location.pathname;
console.log(url);
const year = url.substring(url.length - 4);
console.log(year);

const Srijan = () => {
  const [newUrl, setNewUrl] = useState("/fests/srijan/" + year);
  console.log(newUrl);
  
  return (
    <Container>
      <ScrollToTop />
      <FestsArchive
        title={SrijanArchive.title}
        description={SrijanArchive.description}
        logo={SrijanArchive.logo}
        events={SrijanArchive.events}
        id="Srijan"
        links={SrijanArchive.links}
        gallery={SrijanArchive.gallery}
        name={SrijanArchive.name}
        youtube={SrijanArchive.youtube}
      />
    </Container>
  );
};

export default Srijan;
