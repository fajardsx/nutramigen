import React, { useEffect, useState } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page1.css";
import loadingicon from "../assets/bayi2.gif";
import { connect } from "react-redux";
import { updateCurrentPage, updateCurrentDirection } from "../redux/actions/actions";
import Constant from "../config/Constant";
import { navi } from "../component";
import { reactLocalStorage } from "reactjs-localstorage";
const propsAnimLogo = {
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
const propsAnim = {
  delay: 1300,
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
  delay: 1500,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { left: ["-300px", "11vw"], opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};

//
const Page41 = (props) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    //resetDefault();
    setTimeout(() => setShouldRender(true), 3000);
  }, []);
  function onNext() {
    console.log("home props", props);
    props.updateDirection("left");
    NaviNext(props);
    //this.props.history.push("/page2");
  }
  function onBack() {
    console.log("page2 props", props);
    props.updateDirection("right");
    NaviGoback(props);
    //this.props.history.goBack();
  }
  async function resetDefault() {
    //await reactLocalStorage.set("PAGE", 3);
  }
  // render() {
  return (
    <ContainerSwipe callNext={onNext.bind(this)} callPrev={onBack.bind(this)}>
      <Observer
        render={shouldRender}
        duration={1200}
        style={{ opacity: 0 }}
        mount={{ opacity: 1 }}
        unmount={[{ opacity: 0 }]}
        easing="linear">
        <div className="observer-demo centers">
          <Tweenful.div
            className="page4_1Box"
            {...propsAnim}
            delay={Constant.NORMAL_DURATION}
            duration={Constant.NORMAL_DURATION}
            style={{ opacity: 0 }}>
            <div className="bayihex">
              <div className="Titlebayi">
                <img src={loadingicon} alt="bayi" style={{ width: "100%" }} />
              </div>
            </div>
            <Tweenful.div
              className="titlebg2"
              {...propsAnim}
              delay={Constant.NORMAL_DURATION * 1.5}
              duration={Constant.NORMAL_DURATION}
              style={{ opacity: 0 }}>
              {/* <div className="titleContainer">
                <div className="titlestyle titleBig">{"5"}</div>
                <div className="titlestyle page41titles">
                  {"Langkah Mudah Mengenali Gejala\nAlergi Susu Sapi"}
                </div>
              </div> */}
            </Tweenful.div>
          </Tweenful.div>
        </div>
      </Observer>
      {navi(onBack, onNext)}
    </ContainerSwipe>
  );
  //}
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
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
export default connect(mapStateToProps, mapDispatchToProps)(Page41);
