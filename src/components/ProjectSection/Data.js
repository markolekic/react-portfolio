import { SiStyledcomponents, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiReact, SiHtml5, SiSalesforce, SiSass } from "react-icons/si";

export const projectSection = {
  id: "projects",
};

export const projectsData = [
  {
    id: 1,
    title: "Photographer website",
    description: "This is the first project that I worked on. On this landing page I used Bootstrap with a little of jQuery. I Used jQuery plug-in Ekko-Lightbox for the photo gallery.",
    sourceLink: "https://github.com/markolekic/jeleninSajt",
    appLink: "https://markolekic.github.io/jeleninSajt/",
    image: require("../../images/project-1.jpg"),
    imageAlt: "Photograph site",
    imgStart: false,
    color: "#ffe9ec",
    techStack: [
      {
        id: "bootstrap",
        tech: <SiBootstrap></SiBootstrap>,
      },
      {
        id: "jquery",
        tech: <SiJquery></SiJquery>,
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio page",
    description: "The idea was to build a minimalistic portfolio page. On this project, I used React with Styled components. AOS (Animate on Scroll Library) for Fade scroll effects.",
    sourceLink: "https://github.com/markolekic/portfolio",
    appLink: "https://markolekic.net",
    image: require("../../images/project-2.jpg"),
    imageAlt: "Portfolio site",
    imgStart: true,
    color: "#c3bbb1",
    techStack: [
      {
        id: "react",
        tech: <SiReact></SiReact>,
      },
      {
        id: "styled",
        tech: <SiStyledcomponents></SiStyledcomponents>,
      },
    ],
  },
  {
    id: 3,
    title: "Weather App",
    description: "This app is showing the weather in countries and cities from all around the globe. It uses the API key from openweather.org which is gotten from fetch(), and then() method which returns a result.",
    sourceLink: "https://github.com/markolekic/weatherApp",
    appLink: "https://markolekic.github.io/weatherApp/",
    image: require("../../images/project-3.jpg"),
    imageAlt: "Weather App",
    imgStart: false,
    color: "#d4ebf2",
    techStack: [
      {
        id: "html",
        tech: <SiHtml5></SiHtml5>,
      },
      {
        id: "css",
        tech: <SiCss3></SiCss3>,
      },
      {
        id: "js",
        tech: <SiJavascript></SiJavascript>,
      },
    ],
  },
  {
    id: 4,
    title: "Favorite albums",
    description: "Classes and localStorage are used in this simple application. You can add your favorite band and album name. When the page is refreshed, it saved value in localStorage and displayed on a page.",
    sourceLink: "https://github.com/markolekic/favAlbum",
    appLink: "https://markolekic.github.io/favAlbum/",
    image: require("../../images/project-4.jpg"),
    imageAlt: "Favorite albums",
    imgStart: true,
    color: "#d3d3d3",
    techStack: [
      {
        id: "bootstrap",
        tech: <SiBootstrap></SiBootstrap>,
      },
      {
        id: "js",
        tech: <SiJavascript></SiJavascript>,
      },
    ],
  },
  {
    id: 5,
    title: "Video search",
    description: "An app built with React using the YouTube API to search for videos. If the search is not working, it is probably because of the exceeded daily quota.",
    sourceLink: "https://github.com/markolekic/search-videos-react",
    appLink: "https://markolekic.github.io/search-videos-react/",
    image: require("../../images/project-5.jpg"),
    imageAlt: "Favorite albums",
    imgStart: false,
    color: "#C9C3D1",
    techStack: [
      {
        id: "react",
        tech: <SiReact></SiReact>,
      },
      {
        id: "css",
        tech: <SiCss3></SiCss3>,
      },
    ],
  },
  {
    id: 6,
    title: "MK fighters",
    description: "Search Mortal Kombat characters by name or fighter origin. An application made with React, used hooks and conditional component rendering.",
    sourceLink: "https://github.com/markolekic/search-mk-fighters",
    appLink: "https://markolekic.github.io/search-mk-fighters/",
    image: require("../../images/project-6.jpg"),
    imageAlt: "Favorite albums",
    imgStart: true,
    color: "#EDE0C3",
    techStack: [
      {
        id: "react",
        tech: <SiReact></SiReact>,
      },
      {
        id: "css",
        tech: <SiCss3></SiCss3>,
      },
    ],
  },
  {
    id: 7,
    title: "Skandinavisk",
    description: "B2C web shop for the Danish brand of scented candles built with SFCC and Page designer components.",
    sourceLink: null,
    appLink: "https://www.skandinavisk.com/",
    image: require("../../images/project-7.jpg"),
    imageAlt: "Skandinavisk site",
    imgStart: false,
    color: "#77918f",
    techStack: [
      {
        id: "salesforce",
        tech: <SiSalesforce></SiSalesforce>,
      },
      {
        id: "sass",
        tech: <SiSass></SiSass>,
      },
      {
        id: "javascript",
        tech: <SiJavascript></SiJavascript>,
      },
    ],
  },
];
