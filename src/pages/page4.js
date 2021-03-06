import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page4.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { Button, Col, Row, Table } from "react-bootstrap";
import { navi, refHanyakalangan } from "../component";
import { reactLocalStorage } from "reactjs-localstorage";
import ReactGA from "react-ga";

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
const propsAnim3 = {
  delay: 1200,
  render: false,
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

class Page4 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props);
    this.state = {
      shouldRender: true,
      currentQuiz: 1,
      score: 0,
      scorePage: [],
      page4skor: [-1, -1],
      beratCondition: false,
    };
  }
  componentDidMount() {
    this.setState({
      currentQuiz: 1,
    });
    this.resetDefault();
    this.props.updatePage(4);
  }
  async resetDefault() {
    console.log(this.state.scorePage);
    //  await reactLocalStorage.set("PAGE", 4);
  }
  onNext() {
    console.log("page2 props", this.props);
    //this.props.history.push("/");

    this.props.updateDirection("left");
    NaviNext(this.props);
  }
  onBack() {
    console.log("page2 props", this.props);
    //this.props.updateDirection("right");

    this.props.updateDirection("right");
    NaviGoback(this.props);
  }
  onClickHandle = (e, quizIndex) => {
    //console.log("click ", e);
    if (this.state.currentQuiz !== 4) {
      ReactGA.event({
        category: `Question Answer`,
        action: `Select ${e}`,
        label: `Question ${quizIndex}`,
      });
      let scorePage = [...this.state.scorePage];
      let score = this.state.score;
      scorePage[quizIndex] = { score: e, id: e };
      console.log("click ", scorePage);
      score += e;
      let beratCondition = false;
      if (this.state.currentQuiz == 5 && e == 3) {
        beratCondition = true;
      }
      this.setState({ scorePage, score, beratCondition });
    }
  };
  onClickHandle3 = (id, e, quizIndex) => {
    //console.log("click ", e);
    if (this.state.currentQuiz !== 4) {
      ReactGA.event({
        category: `Question Answer`,
        action: `Select ${e}`,
        label: `Question ${quizIndex}`,
      });
      let scorePage = [...this.state.scorePage];
      let score = this.state.score;
      scorePage[quizIndex] = { score: e, id: id };
      console.log("click ", scorePage);
      score += e;
      this.setState({ scorePage, score });
    }
  };
  onClickHandle1 = (e, part, quizIndex) => {
    // console.log("click ", e);
    //console.log("part ", part);
    let page4skor = [...this.state.page4skor];
    page4skor[part] = e;
    ReactGA.event({
      category: `Question Answer`,
      action: `Select ${e}`,
      label: `Question ${quizIndex} part ${part}`,
    });
    this.setState({ page4skor }, () => {
      if (
        this.state.page4skor[0] > -1 &&
        this.state.page4skor[1] > -1 &&
        this.state.page4skor[2] > -1
      ) {
        let scorePage = [...this.state.scorePage];
        let score = this.state.score;
        scorePage[this.state.currentQuiz - 1] = {
          score: page4skor[0] + page4skor[1] + page4skor[2],
        };
        let beratCondition = false;
        if (page4skor[0] == 3 || page4skor[1] == 3 || page4skor[2] == 6) {
          beratCondition = true;
        }
        score += page4skor[0] + page4skor[1] + page4skor[2];
        this.setState({ scorePage, score, beratCondition });
      }
    });
  };
  onNaviQuestion = (type) => {
    console.log(this.state.scorePage);
    console.log(this.state.page4skor);
    let beratCondition = false;
    if (this.state.currentQuiz == 5) {
      if (this.state.scorePage[5] && this.state.scorePage[5].score == 3) {
        beratCondition = true;
      } else if (
        this.state.page4skor.find((res) => {
          return res == 3;
        }) !== null
      ) {
        beratCondition = true;
      }
    }

    switch (type) {
      case 0:
        if (this.state.currentQuiz == 1) {
          return this.onBack();
        } else {
          return this.setState({ currentQuiz: this.state.currentQuiz - 1 });
        }
      case 1:
        return this.setState({ currentQuiz: this.state.currentQuiz + 1, beratCondition });
    }
  };
  getScore = () => {
    ReactGA.event({
      category: `Question Result`,
      action: `Result ${this.state.score}`,
      label: `Result ${this.state.score}`,
    });
    return this.state.score;
  };

  getQuiz = () => {
    switch (this.state.currentQuiz) {
      case 1:
        return this.quest1();
      case 2:
        return this.quest2();
      case 3:
        return this.quest3();
      case 4:
        return this.quest4();
      case 5:
        return this.quest5();
      case 6:
        return this.questResult();
      default:
        return <div></div>;
    }
  };
  getDisc() {
    if (this.getScore() < 12) {
      return "gejala tidak terkait dengan alergi susu sapi";
    } else {
      return "Curiga anak alergi susu sapi";
    }
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
            <div className="row-container ">
              {/* <Tweenful.div {...propsAnim}>
                <div className="logoLgg" />
              </Tweenful.div>
              <Tweenful.div {...propsAnim2}>
                <div className="titlestyle2 titlePage4">
                  {"5 Langkah mudah untuk membantu dokter mengenali\ngejala alergi susu sapi"}
                </div>
              </Tweenful.div> */}
            </div>

            <div className="content4Container ">
              <Tweenful.div {...propsAnim3} render={this.state.currentQuiz < 6 ? true : false}>
                <div className="content1style SubtitlePage">
                  {
                    "Isi skor (klik bulatan) di setiap gejala yang dialami pasien dokter dan temukan hasil skor di akhir questioner"
                  }
                </div>
              </Tweenful.div>
            </div>
            <Tweenful.div {...propsAnim} render={this.state.currentQuiz < 6 ? true : false}>
              <div className="imagePita" />
            </Tweenful.div>
            {this.getQuiz()}

            {this.state.currentQuiz < 6 && (
              <div className="quiznavi">
                <Button variant="prevQuiz" onClick={() => this.onNaviQuestion(0)}></Button>

                <Button
                  variant="nextQuiz"
                  onClick={() =>
                    this.state.scorePage[this.state.currentQuiz - 1] !== undefined
                      ? this.onNaviQuestion(1)
                      : null
                  }
                  style={{
                    opacity:
                      this.state.scorePage[this.state.currentQuiz - 1] !== undefined ? 1 : 0.5,
                  }}></Button>
              </div>
            )}
          </div>
        </Observer>

        {this.state.currentQuiz === 6 && navi(this.onBack.bind(this), this.onNext.bind(this))}
        {refHanyakalangan()}
      </ContainerSwipe>
    );
  }
  //
  cellQuestion = (quizIndex, index, title, custom) => {
    return (
      <div className={`row-container addPaddingQuiz vcenter`} {...propsAnim}>
        <a
          className="content1style numberAnswerContainer"
          onClick={() => this.onClickHandle(index, quizIndex)}>
          {}
        </a>
        <div className={`content1style answerText ${custom}`}>{title}</div>
        {this.state.scorePage[quizIndex] !== undefined &&
          this.state.scorePage[quizIndex].id === index && <div id="check" />}
      </div>
    );
  };
  cellQuestion2 = (quizIndex, index, title, custom) => {
    return (
      <div className={`row-container addPaddingQuiz`} {...propsAnim}>
        <a
          className="content1style numberAnswerContainer"
          onClick={() => this.onClickHandle(index, quizIndex)}>
          {}
        </a>
        <div className={`content1style answerText ${custom}`}>{title}</div>
        {this.state.scorePage[quizIndex] !== undefined &&
          this.state.scorePage[quizIndex].id === index && <div id="check" />}
      </div>
    );
  };
  //
  cellQuestion3 = (quizIndex, id, index, title, custom, imgStyle) => {
    return (
      <div className={`row-container addPadding3 `} {...propsAnim}>
        <a
          className="content1style numberAnswerContainer"
          onClick={() => this.onClickHandle3(id, index, quizIndex)}>
          {}
        </a>
        <div className={`${imgStyle}`} />
        <div className={`content1style answerText ${custom}`}>{title}</div>
        {this.state.scorePage[quizIndex] !== undefined &&
          this.state.scorePage[quizIndex].id === id && <div id="check" />}
      </div>
    );
  };
  cellQuestion4 = (quizIndex, index, part) => {
    return (
      <div className="center">
        <a
          className={`content1style numberAnswerContainer`}
          style={{
            marginRight: 0,
          }}
          onClick={() => this.onClickHandle1(index, part, quizIndex)}>
          {}
        </a>
        {this.state.page4skor[part] == index && <div id="check" />}
      </div>
    );
  };
  // QUESTION LIST
  quest1 = () => (
    <Row className="quizContainer">
      <Row>
        <div className="content1style numberContainer">
          <div id="number">1</div>
        </div>

        <Col>
          <div className="content1style imageHex1" />
          <div className="subTextHex">Gejala menangis*</div>
        </Col>
      </Row>

      <Col {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion(0, 0, "≤ 1 jam/hari")}
        {this.cellQuestion(0, 1, "1-1,5 jam/hari")}
        {this.cellQuestion(0, 2, "1,5 - 2 jam/hari")}
        {this.cellQuestion(0, 3, "2 - 3 jam/hari")}
        {this.cellQuestion(0, 4, "3 - 4 jam/hari")}
      </Col>
      <Col {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion(0, 5, "4 - 5 jam/hari")}
        {this.cellQuestion(0, 6, "≥ 5 jam/hari")}
      </Col>
    </Row>
  );
  quest2 = () => (
    <Row className="quizContainer">
      <Row>
        <div className="content1style numberContainer">
          <div id="number">2</div>
        </div>

        <Col>
          <div className="content1style imageHex2" />
          <div className="subTextHex">{"Gejala muntah\n(Gumoh)"}</div>
        </Col>
      </Row>

      <Col>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion2(1, 0, "2 kali/hari", "customquiz2")}
        {this.cellQuestion2(1, 1, "≥  3 - ≤5 jam/hari, sedikit", "customquiz2")}
        {this.cellQuestion2(1, 2, "1> 5 kali/hari, kira-kira 1 sendok teh", "customquiz2")}
        {this.cellQuestion2(
          1,
          3,
          "> 5 kali/hari, kira-kira setengah porsi di tengah waktu makan",
          "customquiz2"
        )}
      </Col>
      <Col>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion2(
          1,
          4,
          "Muntah berkelanjutan, sedikit demi sedikit 30 menit setelah selesai makan",
          "customquiz2"
        )}
        {this.cellQuestion2(
          1,
          5,
          "Muntah sebanyak setengah porsi di akhir waktu makan",
          "customquiz2"
        )}
        {this.cellQuestion2(
          1,
          6,
          "Muntah sebanyak yang di makan setiap selesai makan",
          "customquiz2"
        )}
      </Col>
    </Row>
  );
  quest3 = () => (
    <Row className="quizContainer">
      <Row>
        <div className="content1style numberContainer">
          <div id="number">3</div>
        </div>

        <Col>
          <div className="content1style imageHex3" />
          <div className="subTextHex">{"Gejala Buang Air\nBesar (Skala Bristol)"}</div>
        </Col>
      </Row>
      <Col>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion3(2, 0, 4, "BAB keras", "customquiz3", "eek4")}
        {this.cellQuestion3(2, 1, 0, "BAB normal", "customquiz3", "eek0")}
        {this.cellQuestion3(2, 2, 2, "BAB lembek", "customquiz3", "eek2")}
      </Col>
      <Col>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion3(2, 3, 4, "BAB agak cair,bukan karena infeksi", "customquiz3", "eek4_2")}
        {this.cellQuestion3(2, 4, 6, "BAB cair dan encer", "customquiz3", "eek6")}
      </Col>
    </Row>
  );
  quest4 = () => (
    <Row className="quizContainer">
      <Row {...propsAnim}>
        <div className="content1style numberContainer">
          <div id="number">4</div>
        </div>
        <Col {...propsAnim}>
          <div className="content1style imageHex4" />
          <div className="subTextHex">{"Gejala\nRuam Merah"}</div>
        </Col>
      </Row>

      <Col {...propsAnim}>
        <Table className="QuizTable" bordered>
          <thead>
            <tr>
              <th className="tophide lefthide"></th>
              <th className="tophide ">Tidak Ada</th>
              <th className="tophide ">Ringan</th>
              <th className="tophide ">Sedang</th>
              <th className="tophide righthide">Berat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="lefthide" id="hide"></td>
              <td id="skortitle">SKOR</td>
              <td id="skortitle">SKOR</td>
              <td id="skortitle">SKOR</td>
              <td className="righthide" id="skortitle">
                {" "}
                SKOR
              </td>
            </tr>
            <tr>
              <td className="lefthide" id="hide">
                Kepala, Leher
              </td>
              <td id="hide">{this.cellQuestion4(3, 0, 0)}</td>
              <td id="hide">{this.cellQuestion4(3, 1, 0)}</td>
              <td id="hide">{this.cellQuestion4(3, 2, 0)}</td>
              <td className="righthide" id="hide">
                {this.cellQuestion4(3, 3, 0)}
              </td>
            </tr>
            <tr>
              <td className="lefthide">Lengan, Tangan, Kaki</td>
              <td>{this.cellQuestion4(3, 0, 1)}</td>
              <td>{this.cellQuestion4(3, 1, 1)}</td>
              <td>{this.cellQuestion4(3, 2, 1)}</td>
              <td className="righthide">{this.cellQuestion4(3, 3, 1)}</td>
            </tr>
            <tr>
              <td className="lefthide" id="hide"></td>
              <td id="skortitle2">Tidak Ada</td>
              <td id="skortitle2">Ada</td>
              <td className="righthide" id="hide" colSpan="2" />
            </tr>
            <tr>
              <td className="lefthide bottomhide">Biduran</td>
              <td className="bottomhide">{this.cellQuestion4(3, 0, 2)}</td>
              <td className="bottomhide">{this.cellQuestion4(3, 6, 2)}</td>
              <td className="righthide bottomhide" colSpan="2" />
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
  quest5 = () => (
    <Row className="quizContainer">
      <Row {...propsAnim}>
        <div className="content1style numberContainer">
          <div id="number">5</div>
        </div>
        <Col {...propsAnim}>
          <div className="content1style imageHex5" />
          <div className="subTextHex">{"Gejala pada\nSaluran Pernapasan"}</div>
        </Col>
      </Row>

      <Col {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion(4, 0, "Tidak ada gejala")}
        {this.cellQuestion(4, 1, "Ringan")}
      </Col>
      <Col {...propsAnim}>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion(4, 2, "Sedang")}
        {this.cellQuestion(4, 3, "Berat")}
      </Col>
    </Row>
  );
  questResult = () => (
    <div className="content4ContainerResult ">
      <div className="titleScore">Hasil Akhir</div>
      <div className="bgScore">
        <div {...propsAnim}>
          <div className="content1style quizResultTitle">TOTAL SKOR</div>
        </div>
        <div {...propsAnim}>
          <div className="content1style imageHexScore">
            <div className="quizResultHex">{this.getScore()}</div>
          </div>
        </div>
        <div {...propsAnim}>
          <div className="content1style containerResult">
            <div className="quizResultDescHex">{this.getDisc()}</div>
          </div>
        </div>
      </div>

      <div className="resultDesc">
        <div {...propsAnim}>
          <div className="content1style quizResultTitleCara">CARA INTERPRETASI HASIL/SKOR</div>
        </div>
        <div className="row-container quizResultTitleCaraContextPadding">
          <div className="quizResultTitleCaraContext">
            <a id="customtext">{"Skor >=12,"}</a>
            {" curiga anak alergi susu sapi"}
          </div>
          <div className="quizResultTitleCaraContextBorder" />
          {/* {this.state.beratCondition === false && (
            <div className="quizResultTitleCaraContext ">
              <a id="customtext">{"Skor < 12,"}</a>
              {" gejala tidak terkait dengan alergi susu sapi"}
            </div>
          )} */}
          <div className="quizResultTitleCaraContext">
            <a id="customtext">{"< 12 gejala"}</a>
            {` tidak terkait dengan alergi susu sapi,`}
            <a id="customtext">{" bila skor <12 "}</a>
            {`tanpa disertai gejala pada kulit\ndan pernafasan maka pasien Anda mungkin mengalami masalah pencernaan functional`}
          </div>
        </div>
        <div className="quizResultTitleCaraContextBorderLine" />
        <div className="quizref">
          {
            "Reference : Diadaptasi dari: Vandenplas, Y., Duport, C., Eigenmann, P., Host, A, Kuitunen, M., Ribes-Koninck, C., Shah, N., Shamir, R., Staiano, a, Szajewska, H. and Von Berg, A. (2015). A workshop report on the divelopment of the cow,s Milk-related Symptom Score awareness tool for young children, Acta Paediatrica. doi; 101111/apa.12902"
          }
        </div>
      </div>
    </div>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Page4);
