import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page2.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
const propsAnim = {
  delay: 1000,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsAnim2 = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsMask = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { width: [0, "31.5vw"], height: ["30vh", "30vh"] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsMaskDone = {
  delay: 1600,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
class Page2 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props);
    this.state = {
      shouldRender: true,
    };
  }
  componentDidMount() {}
  onNext() {
    console.log("page2 props", this.props);
    //this.props.history.push("/");
    this.props.updateDirection("left");
    NaviNext(this.props);
  }
  onBack() {
    console.log("page2 props", this.props);
    this.props.updateDirection("right");
    NaviGoback(this.props);
  }
  render() {
    const { shouldRender } = this.state;
    return (
      <ContainerSwipe callNext={this.onNext.bind(this)} callPrev={this.onBack.bind(this)}>
        <Observer
          render={shouldRender}
          duration={1200}
          style={{ opacity: 0 }}
          mount={{ opacity: 1 }}
          unmount={[{ opacity: 0 }]}
          easing="linear">
          <div className="observer-demo">
            <div className="row-container">
              <Tweenful.div {...propsAnim}>
                <div className="logoLgg" />
              </Tweenful.div>
              <Tweenful.div {...propsAnim2}>
                <div className="titlestyle2 titlePage2">
                  {
                    "Anak dengan alergi susu sapi akan mengalami risiko \nmanifestasi alergi hingga usia 5 tahun"
                  }
                  <sup id="custom">1</sup>
                </div>
              </Tweenful.div>
            </div>
            <div className="row-container content2Container">
              <div>
                <Tweenful.div {...propsAnim}>
                  <div className="content1style content2text">
                    {
                      "Studi pada 97 anak dengan alergi protein \nsusu sapi yang dipantau hingga usia 5 tahun,\nmasih mengalami gejala alergi"
                    }
                  </div>
                </Tweenful.div>
                <Tweenful.div {...propsAnim}>
                  <ul style={{ marginBottom: 0, paddingInlineStart: 20, marginBlockEnd: 10 }}>
                    <li key={"1"} className="content1style content1textbullet">
                      {"40% asma"}
                    </li>
                    <li key={"2"} className="content1style content1textbullet">
                      {"20% eksim atopik"}
                    </li>
                    <li key={"3"} className="content1style content1textbullet">
                      {"43% rhinitis alergika"}
                    </li>
                  </ul>
                </Tweenful.div>
              </div>
              <div>
                <Tweenful.div {...propsAnim}>
                  <div className="bgDiagram">
                    <Tweenful.div className="diagramMask" {...propsMask}>
                      <div className="bgDiagramLine" />
                    </Tweenful.div>
                    <Tweenful.div {...propsMaskDone}>
                      <div className="bgDiagramEnd" />
                    </Tweenful.div>
                  </div>
                </Tweenful.div>
              </div>
            </div>

            <Tweenful.div {...propsAnim}>
              <div id="footer">
                <div className="contentRefstyle">{"Referensi"}</div>
                <ol
                  className="horizontal"
                  style={{ marginBottom: 0, paddingInlineStart: 7, marginBlockEnd: 10 }}>
                  <li key={"1"} className="contentRefstyle">
                    {"Bishop JM et al Pediatr. 1990 Jun:116(6)-862-7"}
                  </li>
                  <li key={"2"} className="contentRefstyle">
                    {"Herz et al Clin. Ep Allergy 35:397-402"}
                  </li>
                </ol>
              </div>
            </Tweenful.div>
          </div>
        </Observer>
      </ContainerSwipe>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
    direction: state.direction,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePage: (data) => {
      dispatch(updateCurrentPage(data));
    },
    updateDirection: (data) => {
      dispatch(updateCurrentDirection(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page2);
