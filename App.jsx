import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Roadmap2000 from "./components/Roadmap2000";
import Roadmap1440 from "./components/Roadmap1440";
import Roadmap960 from "./components/Roadmap960";
import Roadmap320 from "./components/Roadmap320";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/roadmap-2000">
            <Roadmap2000 {...roadmap2000Data} />
          </Route>
          <Route path="/:path(|roadmap-1440)">
            <Roadmap1440 {...roadmap1440Data} />
          </Route>
          <Route path="/roadmap-960">
            <Roadmap960 {...roadmap960Data} />
          </Route>
          <Route path="/roadmap-320">
            <Roadmap320 {...roadmap320Data} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const roadmap2000Data = {
    head: "/img/head@1x.png",
    community: "Community",
    roadmap: "Roadmap",
    surname1: "White Paper",
    title: "What is the Save Planet?",
    rebirthingTheNewG: <React.Fragment>Rebirthing the new generations of everlasting galaxy<br />with the 3,333 unique NFT planets in the the nearverse</React.Fragment>,
    catusv2T1: "/img/catusv2t-1@1x.png",
    rectangle51: "/img/rectangle-51@1x.png",
    rectangle52: "/img/rectangle-52-2@1x.png",
    etgfh81: "/img/etgfh8-1@2x.png",
    etgfh83: "/img/etgfh8-3@2x.png",
    pieChart011: "/img/pie-chart-01-1@1x.png",
    image1: "/img/image-1@1x.png",
    saveplanet1: "/img/saveplanet-1@2x.png",
    vector2: "/img/vector-1@2x.png",
    catear1016: "/img/catear1-01-6@2x.png",
    catear1017: "/img/catear1-01-7@2x.png",
    catear1018: "/img/catear1-01-8@2x.png",
    catear1019: "/img/catear1-01-8@2x.png",
    catear10110: "/img/catear1-01-10@2x.png",
    surname2: "Head &Face",
    body: "Body",
    vector3: "/img/vector-2@2x.png",
    group77: "/img/group-77-2@1x.png",
    headFaceBody: <React.Fragment>Head<br />Face<br />Body</React.Fragment>,
    backgroundHandBack: <React.Fragment>Background<br />Hand<br />Back</React.Fragment>,
    attributes: "Attributes",
    vector4: "/img/vector-3@2x.png",
    x11: "/img/1-1@1x.png",
    vector5: "/img/vector-4@2x.png",
    x121: "/img/1-2-1@2x.png",
    type: "Type",
    commonRareLegend: <React.Fragment>common<br />rare<br />legend</React.Fragment>,
    commonRare: <React.Fragment>common<br />rare</React.Fragment>,
    rectangle50: "/img/rectangle-50@2x.png",
    x122: "/img/1-2-2@2x.png",
    number: "3333",
    planets: "planets",
    nftSpecifications: "NFT Specifications",
    copyright2022Rnx: "Copyright 2022. Rnx",
    socialMedia: "/img/social-media@2x.png",
};

const roadmap1440Data = {
    head: "/img/head-1@1x.png",
    whatIsTheSavePlanet: "What is the Save Planet?",
    rebirthingTheNewG: <React.Fragment>Rebirthing the new generations of everlasting galaxy<br />with the 3,333 unique NFT planets in the the nearverse</React.Fragment>,
    catusv2T1: "/img/catusv2t-1-1@1x.png",
    rectangle51: "/img/rectangle-51-1@1x.png",
    rectangle52: "/img/rectangle-52-1@1x.png",
    etgfh81: "/img/etgfh8-1@2x.png",
    etgfh83: "/img/etgfh8-3@2x.png",
    pieChart011: "/img/pie-chart-01-1-1@1x.png",
    image1: "/img/image-1-1@1x.png",
    saveplanet1: "/img/saveplanet-1-1@2x.png",
    vector2: "/img/vector-1@2x.png",
    catear1011: "/img/catear1-01-6@2x.png",
    catear1012: "/img/catear1-01-7@2x.png",
    catear1015: "/img/catear1-01-8@2x.png",
    catear1014: "/img/catear1-01-8@2x.png",
    catear1013: "/img/catear1-01-10@2x.png",
    vector3: "/img/vector-2@2x.png",
    surname: "Head &Face",
    body: "Body",
    group77: "/img/group-77-3@1x.png",
    headFaceBody: <React.Fragment>Head<br />Face<br />Body</React.Fragment>,
    attributes: "Attributes",
    backgroundHandBack: <React.Fragment>Background<br />Hand<br />Back</React.Fragment>,
    x11: "/img/1-1-1@1x.png",
    vector4: "/img/vector-8@2x.png",
    vector5: "/img/vector-9@2x.png",
    x121: "/img/1-2-4@2x.png",
    type: "Type",
    commonRareLegend: <React.Fragment>common<br />rare<br />legend</React.Fragment>,
    commonRare: <React.Fragment>common<br />rare</React.Fragment>,
    x122: "/img/1-2-5@2x.png",
    number: "3333",
    planets: "planets",
    nftSpecifications: "NFT Specifications",
    copyright2022Rnx: "Copyright 2022. Rnx",
    socialMedia: "/img/social-media-1@2x.png",
};

const right2Data = {
    className: "right-2",
};

const group793Data = {
    className: "group-79-2",
};

const roadmap960Data = {
    head: "/img/head-2@1x.png",
    whatIsTheSavePlanet: "What is the Save Planet?",
    rebirthingTheNewG: <React.Fragment>Rebirthing the new generations of everlasting galaxy<br />with the 3,333 unique NFT planets in the the nearverse</React.Fragment>,
    catusv2T1: "/img/catusv2t-1-2@1x.png",
    rectangle51: "/img/rectangle-51-2@1x.png",
    rectangle52: "/img/rectangle-52-2@1x.png",
    etgfh81: "/img/etgfh8-1-2@2x.png",
    etgfh83: "/img/etgfh8-3-2@2x.png",
    pieChart011: "/img/pie-chart-01-1-2@1x.png",
    image1: "/img/image-1-2@1x.png",
    saveplanet1: "/img/saveplanet-1-1@2x.png",
    vector2: "/img/vector-11@2x.png",
    vector3: "/img/vector-12@2x.png",
    surname: "Head &Face",
    body: "Body",
    catear1011: "/img/catear1-01-1-1@2x.png",
    catear1012: "/img/catear1-01-2-1@2x.png",
    catear1015: "/img/catear1-01-5-1@2x.png",
    catear1014: "/img/catear1-01-5-1@2x.png",
    catear1013: "/img/catear1-01-3-1@2x.png",
    group77: "/img/group-77@1x.png",
    headFaceBody: <React.Fragment>Head<br />Face<br />Body</React.Fragment>,
    attributes: "Attributes",
    backgroundHandBack: <React.Fragment>Background<br />Hand<br />Back</React.Fragment>,
    x11: "/img/1-1-2@1x.png",
    vector4: "/img/vector-13@2x.png",
    vector5: "/img/vector-14@2x.png",
    type: "Type",
    x121: "/img/1-2-7@2x.png",
    commonRareLegend: <React.Fragment>common<br />rare<br />legend</React.Fragment>,
    commonRare: <React.Fragment>common<br />rare</React.Fragment>,
    x122: "/img/1-2-8@2x.png",
    number: "3333",
    planets: "planets",
    nftSpecifications: "NFT Specifications",
    copyright2022Rnx: "Copyright 2022. Rnx",
    socialMedia: "/img/social-media-2@2x.png",
    rightProps: right2Data,
    group79Props: group793Data,
};

const textLink4Data = {
    className: "text-link-7",
};

const textLink23Data = {
    className: "text-link-10",
};

const roadmap320Data = {
    head: "/img/head-3@1x.png",
    whatIsTheSavePlanet: "What is the Save Planet?",
    rebirthingTheNewG: <React.Fragment>Rebirthing the new generations of everlasting galaxy<br />with the 3,333 unique NFT planets in the the nearverse</React.Fragment>,
    catusv2T1: "/img/catusv2t-1-3@2x.png",
    rectangle51: "/img/rectangle-51-3@1x.png",
    rectangle52: "/img/rectangle-52-3@2x.png",
    etgfh81: "/img/etgfh8-1-3@2x.png",
    etgfh83: "/img/etgfh8-3-3@2x.png",
    image1: "/img/image-1-3@2x.png",
    address1: "1 Planet = 5",
    whitelist: "Whitelist",
    n1: "N",
    address2: "1 Planet = 10",
    n2: "N",
    publicSale: "Public Sale",
    x121: "/img/1-2-9@2x.png",
    saveplanet1: "/img/saveplanet-1-3@2x.png",
    surname1: "Head &Face",
    vector2: "/img/vector-16@2x.png",
    vector3: "/img/vector-17@2x.png",
    body: "Body",
    group77: "/img/group-77-1@2x.png",
    catear1011: "/img/catear1-01-1-2@2x.png",
    catear1012: "/img/catear1-01-2-2@2x.png",
    catear1015: "/img/catear1-01-5-2@2x.png",
    catear1014: "/img/catear1-01-5-2@2x.png",
    catear1013: "/img/catear1-01-3-2@2x.png",
    x122: "/img/1-2-10@2x.png",
    commonRareLegend: <React.Fragment>common<br />rare<br />legend</React.Fragment>,
    commonRare: <React.Fragment>common<br />rare</React.Fragment>,
    type: "Type",
    vector4: "/img/vector-18@2x.png",
    x11: "/img/1-1-3@1x.png",
    vector5: "/img/vector-19@2x.png",
    nftSpecifications: "NFT Specifications",
    x123: "/img/1-2-11@2x.png",
    number: "3333",
    planets: "planets",
    iconTwitter: "/img/ant-design-twitter-outlined@2x.png",
    iconFacebook: "/img/ant-design-facebook-filled@2x.png",
    surname2: "White Paper",
    attributes: "Attributes",
    headFaceBody: <React.Fragment>Head<br />Face<br />Body</React.Fragment>,
    backgroundHandBack: <React.Fragment>Background<br />Hand<br />Back</React.Fragment>,
    copyright2022Rnx: "Copyright 2022. Rnx",
    pieChart011: "/img/pie-chart-01-1-3@2x.png",
    textLinkProps: textLink4Data,
    textLink2Props: textLink23Data,
};

