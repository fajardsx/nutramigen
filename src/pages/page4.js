import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page4.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { Table } from "react-bootstrap";
import { navi } from "../component";
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
      scorePage: [0],
      page4skor: [-1, -1],
    };
  }
  componentDidMount() {
    this.setState({
      currentQuiz: 1,
    });
  }
  onNext() {
    console.log("page2 props", this.props);
    //this.props.history.push("/");
    if (this.state.currentQuiz == 6) {
      this.props.updateDirection("left");
      NaviNext(this.props);
    }
  }
  onBack() {
    console.log("page2 props", this.props);
    //this.props.updateDirection("right");
    //NaviGoback(this.props);
    if (this.state.currentQuiz == 6) {
      this.props.updateDirection("right");
      NaviGoback(this.props);
    }
  }
  onClickHandle = (e) => {
    //console.log("click ", e);
    if (this.state.currentQuiz !== 4) {
      let scorePage = [...this.state.scorePage];
      let score = this.state.score;
      scorePage[this.state.currentQuiz - 1] = { score: e };
      score += e;
      this.setState({ currentQuiz: this.state.currentQuiz + 1, scorePage, score });
    }
  };
  onClickHandle1 = (e, part) => {
    // console.log("click ", e);
    //console.log("part ", part);
    let page4skor = [...this.state.page4skor];
    page4skor[part] = e;
    this.setState({ page4skor }, () => {
      if (this.state.page4skor[0] > -1 && this.state.page4skor[1] > -1) {
        let scorePage = [...this.state.scorePage];
        let score = this.state.score;
        scorePage[this.state.currentQuiz - 1] = { score: page4skor[0] + page4skor[1] };
        score += page4skor[0] + page4skor[1];
        this.setState({ currentQuiz: this.state.currentQuiz + 1, scorePage, score });
      }
    });
  };
  getScore = () => {
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
                    "Isi skor (klik bulatan) di setiap gejala yang dialami pasien dokter dan temukan hasil skor\ndi akhir questioner"
                  }
                </div>
              </Tweenful.div>
            </div>
            <Tweenful.div {...propsAnim} render={this.state.currentQuiz < 6 ? true : false}>
              <div className="imagePita" />
            </Tweenful.div>
            {this.getQuiz()}
          </div>
        </Observer>
        {
          navi(this.onBack.bind(this),this.onNext.bind(this))
        }
      </ContainerSwipe>
    );
  }
  //
  cellQuestion = (index, title, custom) => {
    return (
      <div className={`row-container addPaddingQuiz `} {...propsAnim}>
        <a
          href="#"
          className="content1style numberAnswerContainer"
          onClick={() => this.onClickHandle(index)}>
          {}
        </a>
        <div className={`content1style answerText ${custom}`}>{title}</div>
      </div>
    );
  };
  //
  cellQuestion3 = (index, title, custom, imgStyle) => {
    return (
      <div className={`row-container addPadding3 `} {...propsAnim}>
        <a
          href="#"
          className="content1style numberAnswerContainer"
          onClick={() => this.onClickHandle(index)}>
          {}
        </a>
        <div className={`${imgStyle}`} />
        <div className={`content1style answerText ${custom}`}>{title}</div>
      </div>
    );
  };
  cellQuestion4 = (index, part) => {
    return (
      <div className={`row-container addPadding4 `} {...propsAnim}>
        <a
          href="#"
          className={`content1style numberAnswerContainer`}
          style={{
            marginRight: 0,
            backgroundColor: this.state.page4skor[part] > -1 ? "#bd6300" : "#f59933",
          }}
          onClick={() => this.onClickHandle1(index, part)}>
          {}
        </a>
      </div>
    );
  };
  // QUESTION LIST
  quest1 = () => (
    <div className="row-container content4Container ">
      <div {...propsAnim}>
        <div className="content1style numberContainer">1</div>
      </div>
      <div {...propsAnim}>
        <div className="content1style imageHex1" />
        <div className="subTextHex">Gejala menangis*</div>
      </div>

      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion(0, "≤ 1 jam/hari")}
        {this.cellQuestion(1, "1-1,5 jam/hari")}
        {this.cellQuestion(2, "1,5 - 2 jam/hari")}
        {this.cellQuestion(3, "2 - 3 jam/hari")}
        {this.cellQuestion(4, "3 - 4 jam/hari")}
      </div>
      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion(5, "4 - 5 jam/hari")}
        {this.cellQuestion(6, "≥ 5 jam/hari")}
      </div>
    </div>
  );
  quest2 = () => (
    <div className="row-container content4Container ">
      <div {...propsAnim}>
        <div className="content1style numberContainer">2</div>
      </div>
      <div {...propsAnim}>
        <div className="content1style imageHex2" />
        <div className="subTextHex">{"Gejala muntah\n(Gumoh)"}</div>
      </div>

      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion(0, "2 kali/hari", "customquiz2")}
        {this.cellQuestion(1, "≥  3 - ≤5 jam/hari,\nsedikit", "customquiz2")}
        {this.cellQuestion(2, "1> 5 kali/hari, kira-kira\n1 sendok teh", "customquiz2")}
        {this.cellQuestion(
          3,
          "> 5 kali/hari, kira-kira\nsetengah porsi di tengah\nwaktu makan",
          "customquiz2"
        )}
      </div>
      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion(
          4,
          "Muntah berkelanjutan,\nsedikit demi sedikit 30 menit\nsetelah selesai makan",
          "customquiz2"
        )}
        {this.cellQuestion(
          5,
          "Muntah sebanyak\nsetengah porsi di akhir\nwaktu makan",
          "customquiz2"
        )}
        {this.cellQuestion(
          6,
          "Muntah sebanyak yang \ndi makan setiap selesai\nmakan",
          "customquiz2"
        )}
      </div>
    </div>
  );
  quest3 = () => (
    <div className="row-container content4Container ">
      <div {...propsAnim}>
        <div className="content1style numberContainer">3</div>
      </div>
      <div {...propsAnim}>
        <div className="content1style imageHex3" />
        <div className="subTextHex">{"Gejala Buang Air\nBesar (Skala Bristol)"}</div>
      </div>

      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion3(4, "BAB keras", "customquiz2", "eek4")}
        {this.cellQuestion3(0, "BAB normal", "customquiz2", "eek0")}
        {this.cellQuestion3(2, "BAB lembek", "customquiz2", "eek2")}
      </div>
      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion3(4, "BAB agak cair,\nbukan karena infeksi", "customquiz2", "eek4_2")}
        {this.cellQuestion3(6, "BAB cair dan\nencer", "customquiz2", "eek6")}
      </div>
    </div>
  );
  quest4 = () => (
    <div className="row-container content4Container ">
      <div {...propsAnim}>
        <div className="content1style numberContainer">4</div>
      </div>
      <div {...propsAnim}>
        <div className="content1style imageHex4" />
        <div className="subTextHex">{"Gejala\nRuam Merah"}</div>
      </div>

      <div {...propsAnim}>
        <Table className="QuizTable" borderless>
          <thead>
            <tr>
              <th></th>
              <th>Tidak Ada</th>
              <th>Ringan</th>
              <th>Sedang</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td id="skortitle">SKOR</td>
              <td id="skortitle">SKOR</td>
              <td id="skortitle">SKOR</td>
              <td id="skortitle"> SKOR</td>
            </tr>
            <tr>
              <td>Kepala, Leher</td>
              <td>{this.cellQuestion4(0, 0)}</td>
              <td>{this.cellQuestion4(1, 0)}</td>
              <td>{this.cellQuestion4(2, 0)}</td>
              <td>{this.cellQuestion4(3, 0)}</td>
            </tr>
            <tr>
              <td>Lengan, Tangan, Kaki</td>
              <td>{this.cellQuestion4(0, 0)}</td>
              <td>{this.cellQuestion4(1, 0)}</td>
              <td>{this.cellQuestion4(2, 0)}</td>
              <td>{this.cellQuestion4(3, 0)}</td>
            </tr>
            <tr>
              <td></td>
              <td id="skortitle2">Tidak Ada</td>
              <td id="skortitle2">Ada</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Biduran</td>
              <td>{this.cellQuestion4(0, 1)}</td>
              <td>{this.cellQuestion4(6, 1)}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
  quest5 = () => (
    <div className="row-container content4Container ">
      <div {...propsAnim}>
        <div className="content1style numberContainer">5</div>
      </div>
      <div {...propsAnim}>
        <div className="content1style imageHex5" />
        <div className="subTextHex">{"Gejala pada\nSaluran Pernapasan"}</div>
      </div>

      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz">SKOR</div>
        {this.cellQuestion(0, "Tidak ada gejala")}
        {this.cellQuestion(1, "Ringan")}
      </div>
      <div {...propsAnim}>
        <div className="content1style content4text titleQuiz"></div>
        {this.cellQuestion(2, "Sedang")}
        {this.cellQuestion(3, "Berat")}
      </div>
    </div>
  );
  questResult = () => (
    <div className="content4ContainerResult ">
      <div className="titleScore">Hasil Akhir</div>
      <div className="bgScore">
        <div {...propsAnim}>
          <div className="content1style quizResultTitle">TOTAL SCORE</div>
        </div>
        <div {...propsAnim}>
          <div className="content1style imageHexScore">
            <div className="quizResultHex">{this.getScore()}</div>
          </div>
        </div>
        <div {...propsAnim}>
          <div className="content1style containerResult">
            <div className="quizResultDescHex">
              {
                "Kemungkinan pasien Dokter mengalami masalah pencernaan fungsional jika\ntanpa disertai gejala pada kulit dan pernafasan."
              }
            </div>
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
          <div className="quizResultTitleCaraContext ">
            <a id="customtext">{"Skor < 12,"}</a>
            {" gejala tidak terkait dengan alergi susu sapi"}
          </div>
          <div className="quizResultTitleCaraContextBorder" />
          <div className="quizResultTitleCaraContext">
            <a id="customtext">{"Bila skor <12"}</a>
            {` tanpa disertai gejala pada kulit dan pernafasan maka anak Anda\nmungkin mengalami masalah pencernaan fungsional (buka halaman 6)`}
          </div>
        </div>
        <div className="quizResultTitleCaraContextBorderLine" />
        <div className="quizref">
          {
            "Reference : Diadaptasi dari: Vandenplas, Y., Duport, C., Eigenmann, P., Host, A, Kuitunen, M., Ribes-Koninck, C., Shah, N., Shamir, R., Staiano, a, Szajewska, H. and Von Berg, A. (2015). A workshop report on the divelopment of the\ncow,s Milk-related Symptom Score awareness tool for young children, Acta Paediatrica. doi; 101111/apa.12902"
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
