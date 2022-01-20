const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/senate"],
    exact: true,
    component: "Senate",
  },
  {
    path: ["/senate"],
    component: "SenateArchive",
  },
  {
    path: ["/fests"],
    exact: true,
    component: "Fests/index.tsx",
  },
  {
    path: ["/calender"],
    exact: true,
    component: "Calender",
  },
  {
    path: ["/fests/srijan"],
    exact: true,
    component: "Fests/srijan.tsx",
  },
  {
    path: ["/fests/concetto"],
    exact: true,
    component: "Fests/concetto.tsx",
  },
  {
    path: ["/fests/parakram"],
    exact: true,
    component: "Fests/parakram.tsx",
  },
  {
    path: ["/fests/srijan/years/"],
    component: "Fests_archive/srijan.tsx",
  },
  {
    path: ["/fests/parakram/years"],
    component: "Fests_archive/parakram.tsx",
  },
  {
    path: ["/fests/concetto/years"],
    component: "Fests_archive/concetto.tsx",
  },
  {
    path: ["/clubs"],
    exact: true,
    component: "Clubs/index.tsx",
  },
  {
    path: ["/clubs"],
    component: "ClubDetails"
  },
  {
    path: ["/events"],
    component: "EventDetails"
  },
  {
    component: "404"
  },
];

export default routes;
