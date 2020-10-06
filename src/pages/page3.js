import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
import "./css/page3.css";
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
class Page3 extends Component {
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
                    "Proses alergi di awal kehidupan akan memicu terjadinya\ninflamasi sistemik yang menimbulkan rangkaian Allergic March"
                  }
                </div>
              </Tweenful.div>
            </div>
            <div className="content1Container">
              <div>
                <Tweenful.div className="bgArrow" {...propsAnim}>
                  <div className="content1style content1text">
                    {
                      "Proses ini dapat diinfervensi dengan tata laksana alergi susu\nsapi yang tepat. Inflamasi sistemik dapat dicegah dengan\ndiet probiotik"
                    }
                    <sup>2</sup>
                  </div>
                </Tweenful.div>
              </div>
              <div>
                <Tweenful.div {...propsAnim}>
                  <div className="content1style content3text">
                    {
                      "Untuk itu penting dapat mengenali gejala alergi susu sapi sedini mungkin dan\nmengambil langkah-langkah yang tepat sesuai dengan tata laksana alergi susu sapi"
                    }
                  </div>
                </Tweenful.div>
              </div>
            </div>

            {/* <Tweenful.div {...propsAnim}>
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
            </Tweenful.div> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Page3);
