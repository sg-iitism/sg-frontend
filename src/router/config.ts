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
    path: ["/calendar"],
    exact: true,
    component: "Calender",
  },
  {
    path: ["/fests/:festID"],
    exact: true,
    component: "FestDetails",
  },
  {
    path: ["/fests/:festID/years/:year"],
    component: "Fests_archive/index.tsx"
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
