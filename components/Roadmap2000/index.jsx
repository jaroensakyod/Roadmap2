import React from "react";
import Group66 from "../Group66";
import Group79 from "../Group79";
import "./Roadmap2000.css";

class Roadmap2000 extends React.Component {
  render() {
    const {
      head,
      community,
      roadmap,
      surname1,
      title,
      rebirthingTheNewG,
      catusv2T1,
      rectangle51,
      rectangle52,
      etgfh81,
      etgfh83,
      pieChart011,
      image1,
      saveplanet1,
      vector2,
      catear1016,
      catear1017,
      catear1018,
      catear1019,
      catear10110,
      surname2,
      body,
      vector3,
      group77,
      headFaceBody,
      backgroundHandBack,
      attributes,
      vector4,
      x11,
      vector5,
      x121,
      type,
      commonRareLegend,
      commonRare,
      rectangle50,
      x122,
      number,
      planets,
      nftSpecifications,
      copyright2022Rnx,
      socialMedia,
    } = this.props;

    return (
      <div className="roadmap-2000 screen">
        <div className="body">
          <div className="overlap-group9">
            <img className="head" src={head} />
            <div className="desktop-navbar">
              <div className="overlap-group">
                <div className="right">
                  <div className="desktop-menu">
                    <div className="text-link"></div>
                    <div className="text-link-1">
                      <div className="community">{community}</div>
                    </div>
                    <div className="text-link-2">
                      <div className="roadmap">{roadmap}</div>
                    </div>
                  </div>
                </div>
                <div className="big-button">
                  <div className="master-button">
                    <div className="text-button">
                      <div className="surname montserrat-bold-white-24px">{surname1}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-62">
              <h1 className="title genos-normal-white-64px">{title}</h1>
              <div className="flex-row">
                <div className="group-61"></div>
                <div className="rebirthing-the-new-g montserrat-medium-black-haze-32px">{rebirthingTheNewG}</div>
              </div>
            </div>
            <div className="overlap-group1">
              <div className="ellipse-1"></div>
              <img className="catusv2-t-1" src={catusv2T1} />
            </div>
            <img className="rectangle-51" src={rectangle51} />
            <img className="rectangle-52" src={rectangle52} />
            <div className="overlap-group2">
              <img className="et-gfh8-1" src={etgfh81} />
              <img className="vector" src="/img/vector@2x.png" />
              <img className="et-gfh8-3" src={etgfh83} />
            </div>
            <img className="pie-chart-01-1" src={pieChart011} />
            <img className="image-1" src={image1} />
            <div className="group-container">
              <Group66 />
              <div className="group-63">
                <img className="saveplanet-1" src={saveplanet1} />
                <div className="ellipse-2"></div>
              </div>
              <Group79 />
            </div>
            <div className="overlap-group4">
              <div className="rectangle-56"></div>
              <div className="rectangle-57"></div>
              <div className="group-76">
                <img className="vector-1" src={vector2} />
                <div className="overlap-group1-1">
                  <div className="overlap-group-1 michroma-normal-white-36px">
                    <img className="catear1-01-6" src={catear1016} />
                    <img className="catear1-01-7" src={catear1017} />
                    <img className="catear1-01-8" src={catear1018} />
                    <img className="catear1-01-9" src={catear1019} />
                    <img className="catear1-01-10" src={catear10110} />
                    <div className="surname-1">{surname2}</div>
                    <div className="body-1">{body}</div>
                  </div>
                  <img className="vector-2" src={vector3} />
                </div>
              </div>
              <img className="group-77" src={group77} />
            </div>
            <div className="overlap-group5">
              <div className="head-face-body michroma-normal-white-24px">{headFaceBody}</div>
              <div className="background-hand-back michroma-normal-white-24px">{backgroundHandBack}</div>
              <div className="rectangle-50"></div>
              <div className="rectangle-51-1"></div>
              <div className="attributes genos-normal-white-48px">{attributes}</div>
            </div>
            <div className="group-82">
              <img className="vector-3" src={vector4} />
              <img className="x1-1" src={x11} />
              <img className="vector-4" src={vector5} />
            </div>
            <div className="group-59">
              <div className="overlap-group7">
                <img className="x1-2" src={x121} />
                <div className="rectangle-50-1"></div>
                <div className="type genos-normal-white-48px">{type}</div>
              </div>
              <div className="common-rare-container michroma-normal-white-24px">
                <div className="common-rare-legend">{commonRareLegend}</div>
                <div className="common-rare">{commonRare}</div>
              </div>
            </div>
            <div className="group-81">
              <img className="rectangle-50-2" src={rectangle50} />
              <div className="overlap-group8">
                <img className="x1-2-1" src={x122} />
                <div className="number michroma-normal-white-48px">{number}</div>
                <div className="planets montserrat-medium-black-haze-32px">{planets}</div>
                <div className="nft-specifications genos-normal-white-48px">{nftSpecifications}</div>
              </div>
            </div>
            <div className="copyright-2022-rnx roboto-bold-concrete-20px">{copyright2022Rnx}</div>
            <img className="social-media" src={socialMedia} />
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap2000;
