/*eslint-disable*/
import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
// prettier-ignore
import {
  LineChart, Line, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ScatterChart, Scatter, PieChart, Pie, Cell, ZAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import GraphSetTwo from "./GraphSetTwo";
const GraphParams = () => {
  // prettier-ignore
  const STUDENTDATA = [
    "Select Graph", "Study Time", "Past Failures", "Number of Absences",
    "Internet Access", "Overall Student Health","Travel Time",
  ];
  const [studentData, setStudentData] = useState("");
  const [noIAVGHook, setnoIAVGHook] = useState("");
  const [iAVGHook, setIAVGHook] = useState("");
  const [failZeroHook, setFailZeroHook] = useState("");
  const [failOneHook, setFailOneHook] = useState("");
  const [failTwoHook, setFailTwoHook] = useState("");
  const [failThreeHook, setFailThreeHook] = useState("");
  const [styOneToTwoHook, setStyOneToTwoHook] = useState("");
  const [styTwoToFiveHook, setStyTwoToFiveHook] = useState("");
  const [styFiveToTenHook, setStyFiveToTenHook] = useState("");
  const [styMoreThanTenHook, setStyMoreThanTenHook] = useState("");
  const [abZeroToTwentyHook, setAbZeroToTwentyHook] = useState("");
  const [abTwentyToFourtyHook, setAbTwentyToFourtyHook] = useState("");
  const [abFourtyToSixtyHook, setAbFourtyToSixtyHook] = useState("");
  const [abSixtyToEightyHook, setAbSixtyToEightyHook] = useState("");
  // prettier-ignore
  const [abEightyToNightyThreeHook, setAbEightyToNightyThreeHook] = useState("");
  const [veryBadHealthGPAHook, setVeryBadHealthHook] = useState("");
  const [badHealthGPAHook, setBadHealthHook] = useState("");
  const [avgHealthGPAHook, setAvgHealthHook] = useState("");
  const [goodHealthGpaHook, setGoodHealthHook] = useState("");
  const [verGoodHealthGPAHook, setVeryGoodHealthHook] = useState("");

  const [travTimeOneGPAHook, setTravTimeOneGPAHook] = useState("");
  const [travTimeTwoGPAHook, setTravTimeTwoGPAHook] = useState("");
  const [travTimeThreeGPAHook, setTravTimeThreeGPAHook] = useState("");
  const [travTimeFourGPAHook, setTravTimeFourGPAHook] = useState("");
  async function fetchStudentData() {
    const res = await fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-data-jwxco/service/studentdata/incoming_webhook/studentdata"
    );
    const json = await res.json();
    let studentData = json.studentData;
    const studentTotal = studentData.length;
    // console.log(studentTotal);
    //----------Internet Access GPA-------------
    let intAccArr = [];
    studentData.filter((item) => {
      if (item.internet === "yes") {
        intAccArr.push(Number.parseInt(item.G3));
      }
    });
    const intAccAvergage = Math.floor(
      intAccArr.reduce((a, b) => a + b, 0) / intAccArr.length
    );
    //----------NO Internet Access GPA-------------
    let noIntAccArr = [];
    studentData.filter((item) => {
      if (item.internet === "no") {
        noIntAccArr.push(Number.parseInt(item.G3));
      }
    });
    const noIntAverage = Math.floor(
      noIntAccArr.reduce((a, b) => a + b, 0) / noIntAccArr.length
    );
    //----------Num Past Failures-------------
    let failArr = [[], [], [], []];
    studentData.filter((item) => {
      if (item.failures === "0") {
        failArr[0].push(parseInt(item.G3));
      } else if (item.failures === "1") {
        failArr[1].push(parseInt(item.G3));
      } else if (item.failures === "2") {
        failArr[2].push(parseInt(item.G3));
      } else if (item.failures === "3") {
        failArr[3].push(parseInt(item.G3));
      }
    });
    console.log(failArr);
    const zeroAvg = Number.parseInt(failArr[0].reduce((a, b) => a + b, 0) / failArr[0].length); // prettier-ignore
    const oneAvg = Number.parseInt(failArr[1].reduce((a, b) => a + b, 0) / failArr[1].length); // prettier-ignore
    const twoAvg = Number.parseInt(failArr[2].reduce((a, b) => a + b, 0) / failArr[2].length); // prettier-ignore
    const threeAvg = Number.parseInt(failArr[3].reduce((a, b) => a + b, 0) / failArr[3].length); // prettier-ignore
    console.log(zeroAvg, oneAvg, twoAvg, threeAvg);
    //----------Study Time-------------
    let studyTimeArr = [[], [], [], []];
    studentData.filter((item) => {
      if (item.studytime === "1") {
        studyTimeArr[0].push(parseInt(item.G3));
      } else if (item.studytime === "2") {
        studyTimeArr[1].push(parseInt(item.G3));
      } else if (item.studytime === "3") {
        studyTimeArr[2].push(parseInt(item.G3));
      } else if (item.studytime === "4") {
        studyTimeArr[3].push(parseInt(item.G3));
      }
    });
    const studyOneAvg = Number.parseInt(studyTimeArr[0].reduce((a, b) => a + b, 0) / studyTimeArr[0].length); // prettier-ignore
    const studyTwoAvg = Number.parseInt(studyTimeArr[1].reduce((a, b) => a + b, 0) / studyTimeArr[1].length); // prettier-ignore
    const studyThreeAvg = Number.parseInt(studyTimeArr[2].reduce((a, b) => a + b, 0) / studyTimeArr[2].length); // prettier-ignore
    const studyFourAvg = Number.parseInt(studyTimeArr[3].reduce((a, b) => a + b, 0) / studyTimeArr[3].length); // prettier-ignore
    // console.log(studyOneAvg, studyTwoAvg, studyThreeAvg, studyFourAvg);
    //----------Absences-------------
    let absArr = [[], [], [], [], []];
    studentData.forEach((item) => {
      if (item.absences) {
        Number.parseInt(item.absences);
        if (item.absences > 0 && item.absences <= 20) {
          absArr[0].push(Number.parseInt(item.G3));
        } else if (item.absences > 20 && item.absences <= 40) {
          absArr[1].push(Number.parseInt(item.G3));
        } else if (item.absences > 40 && item.absences <= 60) {
          absArr[2].push(Number.parseInt(item.G3));
        } else if (item.absences > 60 && item.absences <= 80) {
          absArr[3].push(Number.parseInt(item.G3));
        } else if (item.absences > 80 && item.absences <= 93) {
          absArr[4].push(Number.parseInt(item.G3));
        }
      }
    });
    // console.log(absArr);
    const absZeroToTwentyAvg = Number.parseInt(absArr[0].reduce((a, b) => a + b, 0) / absArr[0].length); // prettier-ignore
    const absTwentyToFourtyAvg = Number.parseInt(absArr[1].reduce((a, b) => a + b, 0) / absArr[1].length); // prettier-ignore
    const absFourtyToSixtyAvg = Number.parseInt(absArr[2].reduce((a, b) => a + b, 0) / absArr[2].length); // prettier-ignore
    const absSixtyToEightyAvg = Number.parseInt(absArr[3].reduce((a, b) => a + b, 0) / absArr[3].length); // prettier-ignore
    const absEightyToNintyThree = Number.parseInt(absArr[4].reduce((a, b) => a + b, 0) / absArr[4].length); // prettier-ignore
    //----------Travel Time-------------
    // 1 - <15 min
    // 2 - 15 to 30 min
    // 3 - 30 min. to 1 hour
    // 4 - >1 hour
    let travelTimeArr = [[], [], [], []];
    studentData.forEach((item) => {
      if (item.traveltime) {
        // Number.parseInt(item.time);
        if (item.traveltime === " 1") {
          Number.parseInt(travelTimeArr.push[0](item.G3));
        } else if (item.traveltime === "2") {
          Number.parseInt(travelTimeArr[1].push(item.G3));
        } else if (item.traveltime === "3") {
          Number.parseInt(travelTimeArr[2].push(item.G3));
        } else if (item.traveltime === " 4") {
          Number.parseInt(travelTimeArr[3].push(item.G3));
        }
      }
    });
    // console.log(absArr);
    const travTimeOneGPA = Number.parseInt( travelTimeArr[0].reduce((a, b) => a + b, 0) / travelTimeArr[0].length ); // prettier-ignore
    const travTimeTwoGPA = Number.parseInt( travelTimeArr[1].reduce((a, b) => a + b, 0) / travelTimeArr[1].length ); // prettier-ignore
    const travTimeThreeGPA = Number.parseInt( travelTimeArr[2].reduce((a, b) => a + b, 0) / travelTimeArr[2].length); // prettier-ignore
    const travTimeFourGPA = Number.parseInt(travelTimeArr[3].reduce((a, b) => a + b, 0) / travelTimeArr[3].length); // prettier-ignore
    //----------Overall Health-------------
    // health, famrel, goout, activities, famsup schoolsup, failures, Dalc, Wal
    // goodHealthArr = [[],[],[],[]] -->
    // badHealthArr = [[],[],[],[]] -->
    // currentHealthArr = [[],[],[],[]]
    let healthArr = [[], [], [], [], []];
    studentData.forEach((item) => {
      if (item.health) {
        Number.parseInt(item.health);
        if (item.health === "1") {
          healthArr[0].push(Number.parseInt(item.G3));
        } else if (item.health === "2") {
          healthArr[1].push(Number.parseInt(item.G3));
        } else if (item.health === "3") {
          healthArr[2].push(Number.parseInt(item.G3));
        } else if (item.health === "4") {
          healthArr[3].push(Number.parseInt(item.G3));
        } else if (item.health === "5") {
          healthArr[4].push(Number.parseInt(item.G3));
        }
      }
    });
    // console.log(absArr);
    const veryBadHealthGPA = Number.parseInt( healthArr[0].reduce((a, b) => a + b, 0) / healthArr[0].length ); // prettier-ignore
    const badHealthGPA = Number.parseInt( healthArr[1].reduce((a, b) => a + b, 0) / healthArr[1].length ); // prettier-ignore
    const avgHealthGPA = Number.parseInt( healthArr[2].reduce((a, b) => a + b, 0) / healthArr[2].length); // prettier-ignore
    const goodHealthGPA = Number.parseInt(healthArr[3].reduce((a, b) => a + b, 0) / healthArr[3].length); // prettier-ignore
    const veryGoodHealthGPA = Number.parseInt(healthArr[4].reduce((a, b) => a + b, 0) / healthArr[4].length); // prettier-ignore
    //----------Travel Time-------------
    // prettier-ignore
    {setIAVGHook((intAccAvergage / 20) * 100), setnoIAVGHook((noIntAverage / 20) * 100);
      // Past Failures Hooks
      setFailZeroHook(Math.trunc((zeroAvg / 20) * 100), setFailOneHook((oneAvg / 20) * 100));
      setFailTwoHook((twoAvg / 20) * 100), setFailThreeHook((threeAvg / 20) * 100);
      // StudyTime Hooks
      setStyOneToTwoHook((studyOneAvg / 20) * 100), setStyTwoToFiveHook((studyTwoAvg / 20) * 100);
      setStyFiveToTenHook((studyThreeAvg / 20) * 100), setStyMoreThanTenHook((studyFourAvg / 20) * 100);
      // Absences Hooks
      setAbZeroToTwentyHook((absZeroToTwentyAvg / 20) * 100), setAbTwentyToFourtyHook((absTwentyToFourtyAvg / 20) * 100);
      setAbFourtyToSixtyHook((absFourtyToSixtyAvg / 20) * 100), setAbSixtyToEightyHook((absSixtyToEightyAvg / 20) * 100);
      setAbEightyToNightyThreeHook((absEightyToNintyThree / 20) * 100);
      // Overall Health Hooks
      setVeryBadHealthHook((veryBadHealthGPA / 20) * 100),  setBadHealthHook((badHealthGPA / 20) * 100);
      setAvgHealthHook((avgHealthGPA / 20) * 100), setGoodHealthHook((goodHealthGPA / 20) * 100);
      setVeryGoodHealthHook((veryGoodHealthGPA / 20) * 100);
      // Travel Time Hooks
      setTravTimeOneGPAHook((travTimeOneGPA / 20) * 100);
      setTravTimeTwoGPAHook((travTimeTwoGPA / 20) * 100);
      setTravTimeThreeGPAHook((travTimeThreeGPA / 20) * 100);
      setTravTimeFourGPAHook((travTimeFourGPA / 20) * 100);}
  }
  useEffect(() => {
    fetchStudentData();
  }, []);

  // prettier-ignore
  const internetData = [
      { name: "Group A", value: iAVGHook },
      { name: "Group B", value: noIAVGHook },
    ];
  // prettier-ignore
  const failData = [
      { name: "Group A", value: failZeroHook }, { name: "Group B", value: failOneHook },
      { name: "Group C", value: failTwoHook }, { name: "Group D", value: failThreeHook },
    ];
  // prettier-ignore
  const studyTimeData = [
      { x: 1, y: styOneToTwoHook }, { x: 2, y: styTwoToFiveHook },
      { x: 3, y: styFiveToTenHook }, { x: 4, y: styMoreThanTenHook },
    ];
  // prettier-ignore
  const absecenceData = [
      { x: 10, y: abZeroToTwentyHook }, { x: 40, y: abTwentyToFourtyHook },
      { x: 60, y: abFourtyToSixtyHook},{ x: 80, y: abSixtyToEightyHook},
      { x: 100, y: abEightyToNightyThreeHook}
    ];
  // prettier-ignore
  const data = [
    {
      name: 'TT < 2 ',
      uv: travTimeOneGPAHook,
      // pv: 2400,
      amt: 0,
    },
    {
      name: 'Page B',
      uv: travTimeTwoGPAHook,
      // pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: travTimeThreeGPAHook,
      // pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: travTimeFourGPAHook,
      // pv: 3908,
      amt: 2000,
    },
  ];

  // health,
  // famrel, goout, activities, famsup schoolsup, failures, Dalc, Wal

  let GRAPH;
  if (studentData === "Internet Access") {
    GRAPH = (
      <div className="flex-col justify-center items-center ">
        {/* prettier-ignore */}
        <div style={{ width: 400, height: 400 }}className="flex-col justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie dataKey="value" startAngle={180} endAngle={0} data={internetData}
              cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label tick={{ fill: "white" }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p>Avg Grade for</p>
        <p>Internet VS No Internet</p>
      </div>
    );
  } else if (studentData === "Past Failures") {
    GRAPH = (
      <div>
        {/* prettier-ignore */}
        <div style={{ width: 400, height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={failData} fill="#8884d8" label tick={{ fill: "white" }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p>Avg Grade for</p>
        <p>Amount of Past Failures</p>
      </div>
    );
  } else if (studentData === "Study Time") {
    GRAPH =
      // prettier-ignore
      <ScatterChart width={500} height={400} margin={{ top: 80, right: 20, bottom: 0, left: 20,}}>
          <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="Avg Study hrs" tick={{ fill: "white" }} stroke="#efefef" />
            <YAxis type="number" dataKey="y" name="weight" unit="Avg Grade" tick={{ fill: "white" }} />
            <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Avg per Study Time" data={studyTimeData} fill="#8884d8" line shape="cross" />
      </ScatterChart>;
  } else if (studentData === "Number of Absences") {
    GRAPH =
      // prettier-ignore
      <ResponsiveContainer width="80%" aspect={3}>
          <ScatterChart  width={400} height={400} margin={{ top: 80, right: 40, bottom: 40, left: 40,}} >
            <CartesianGrid />
              <XAxis type="number" dataKey="x" name="Absences" unit="Absences" tick={{ fill: "white" }} />
              <YAxis type="number" dataKey="y" name=" Avg " unit=" Grade Avg" tick={{ fill: "white" }} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={absecenceData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>;
  } else if (studentData === "Overall Student Health") {
    // TODO: remove when done adding colors with graph styles
    /* color:  #2a204cff;
  color: #44337aff;
  color: #8884d8ff;
  color: #a6a3e2ff;
  color: #c4c2ecff;
  color: #a3c6c5ff;
  color: #82ca9dff; */
    GRAPH =
      <h1>Overall Health</h1>;
    // prettier-ignore
  } else if (studentData === "Travel Time") {
    GRAPH = (
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    GRAPH = <h1>Select Graph</h1>;
  }
  return (
    <div className="flex flex-col w-full text-center h-screen">
      <div className="flex flex-col items-center justify-center">{GRAPH}</div>

      <form
        className="flex justify-center items-end text-center p-1 w-full h-screen bg-primary"
        onSubmit={(e) => {
          e.preventDefault();
          fetchStudentData();
        }}
      >
        <label
          htmlFor="data"
          className="flex flex-row justify-center items-center p-6 m-6 w-full "
        >
          Select Data to Display
          <select
            name="data"
            className="text-center p-6 m-6 bg-secondary"
            id="studentData"
            value={studentData}
            onChange={(e) => setStudentData(e.target.value)}
            onBlur={(e) => setStudentData(e.target.value)}
          >
            {STUDENTDATA.map((studentData) => (
              <option value={studentData} key={studentData}>
                {studentData}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default GraphParams;
