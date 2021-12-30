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
    path: ["/fests"],
    exact: true,
    component: "Fests/index.tsx",
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
];

export default routes;
