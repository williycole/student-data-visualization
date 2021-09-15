/*eslint-disable*/
import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ZAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraphParams = () => {
  const STUDENTDATA = [
    "Select Graph",
    "Study Time",
    "Past Failures",
    "Number of Absences",
    "Internet Access",
    "Overall Student Health",
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
  const [abEightyToNightyThreeHook, setAbEightyToNightyThreeHook] =
    useState("");

  async function fetchStudentData() {
    const res = await fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-data-jwxco/service/studentdata/incoming_webhook/studentdata"
    );
    const json = await res.json();
    const studentData = json.studentData;
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
    // console.log(failArr[0].length);
    const zeroAvg = Number.parseInt(
      failArr[0].reduce((a, b) => a + b, 0) / failArr[0].length
    );
    const oneAvg = Number.parseInt(
      failArr[1].reduce((a, b) => a + b, 0) / failArr[1].length
    );
    const twoAvg = Number.parseInt(
      failArr[2].reduce((a, b) => a + b, 0) / failArr[2].length
    );
    const threeAvg = Number.parseInt(
      failArr[3].reduce((a, b) => a + b, 0) / failArr[3].length
    );
    // console.log(zeroAvg, oneAvg, twoAvg, threeAvg);
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
    const studyOneAvg = Number.parseInt(
      studyTimeArr[0].reduce((a, b) => a + b, 0) / studyTimeArr[0].length
    );
    const studyTwoAvg = Number.parseInt(
      studyTimeArr[1].reduce((a, b) => a + b, 0) / studyTimeArr[1].length
    );
    const studyThreeAvg = Number.parseInt(
      studyTimeArr[2].reduce((a, b) => a + b, 0) / studyTimeArr[2].length
    );
    const studyFourAvg = Number.parseInt(
      studyTimeArr[3].reduce((a, b) => a + b, 0) / studyTimeArr[3].length
    );
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
    const absZeroToTwentyAvg = Number.parseInt(
      absArr[0].reduce((a, b) => a + b, 0) / absArr[0].length
    );
    const absTwentyToFourtyAvg = Number.parseInt(
      absArr[1].reduce((a, b) => a + b, 0) / absArr[1].length
    );
    const absFourtyToSixtyAvg = Number.parseInt(
      absArr[2].reduce((a, b) => a + b, 0) / absArr[2].length
    );
    const absSixtyToEightyAvg = Number.parseInt(
      absArr[3].reduce((a, b) => a + b, 0) / absArr[3].length
    );
    const absEightyToNintyThree = Number.parseInt(
      absArr[4].reduce((a, b) => a + b, 0) / absArr[4].length
    );

    setIAVGHook((intAccAvergage / 20) * 100);
    setnoIAVGHook((noIntAverage / 20) * 100);
    setFailZeroHook((zeroAvg / 20) * 100);
    setFailOneHook((oneAvg / 20) * 100);
    setFailTwoHook((twoAvg / 20) * 100);
    setFailThreeHook((threeAvg / 20) * 100);
    setStyOneToTwoHook((studyOneAvg / 20) * 100);
    setStyTwoToFiveHook((studyTwoAvg / 20) * 100);
    setStyFiveToTenHook((studyThreeAvg / 20) * 100);
    setStyMoreThanTenHook((studyFourAvg / 20) * 100);
    setAbZeroToTwentyHook(absZeroToTwentyAvg / 20);
    setAbTwentyToFourtyHook((absTwentyToFourtyAvg / 20) * 100);
    setAbFourtyToSixtyHook((absFourtyToSixtyAvg / 20) * 100);
    setAbSixtyToEightyHook((absSixtyToEightyAvg / 20) * 100);
    setAbEightyToNightyThreeHook((absEightyToNintyThree / 20) * 100);
  }

  const internetData = [
    { name: "Group A", value: iAVGHook },
    { name: "Group B", value: noIAVGHook },
  ];

  const failData = [
    { name: "Group A", value: failZeroHook },
    { name: "Group B", value: failOneHook },
    { name: "Group C", value: failTwoHook },
    { name: "Group D", value: failThreeHook },
  ];

  const studyTimeData = [
    { x: 1, y: styOneToTwoHook },
    { x: 2, y: styTwoToFiveHook },
    { x: 3, y: styFiveToTenHook },
    { x: 4, y: styMoreThanTenHook },
  ];

  const absecenceData = [
    { x: 10, y: abZeroToTwentyHook, z: 180 },
    { x: 40, y: abTwentyToFourtyHook, z: 400 },
    { x: 60, y: abFourtyToSixtyHook, z: 280 },
    { x: 80, y: abSixtyToEightyHook, z: 500 },
    { x: 100, y: abEightyToNightyThreeHook, z: 200 },
  ];

  useEffect(() => {
    fetchStudentData();
  }, []);

  let GRAPH;
  if (studentData === "Internet Access") {
    GRAPH = (
      <div className="flex-col justify-center items-center ">
        <div
          style={{ width: 400, height: 400 }}
          className="flex-col justify-center items-center"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={internetData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
                tick={{ fill: "white" }}
              />
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
        <div style={{ width: 400, height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="value"
                data={failData}
                fill="#8884d8"
                label
                tick={{ fill: "white" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p>Avg Grade for</p>
        <p>Amount of Past Failures</p>
      </div>
    );
  } else if (studentData === "Study Time") {
    GRAPH = (
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 80,
          right: 20,
          bottom: 0,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="x"
          name="stature"
          unit="Avg Study hrs"
          tick={{ fill: "white" }}
          stroke="#efefef"
        />
        <YAxis
          type="number"
          dataKey="y"
          name="weight"
          unit="Avg Grade"
          tick={{ fill: "white" }}
        />
        <ZAxis type="number" range={[100]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Avg per Study Time"
          data={studyTimeData}
          fill="#8884d8"
          line
          shape="cross"
        />
      </ScatterChart>
    );
  } else if (studentData === "Number of Absences") {
    GRAPH = (
      <ResponsiveContainer width="80%" aspect={3}>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 80,
            right: 40,
            bottom: 40,
            left: 40,
          }}
        >
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="x"
            name="Absences"
            unit="Absences"
            tick={{ fill: "white" }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name=" Avg "
            unit=" Grade Avg"
            tick={{ fill: "white" }}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={absecenceData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  } else if (studentData === "Overall Student Health") {
    GRAPH = <h1>Overall Student Health</h1>;
  } else {
    GRAPH = <h1>Select Graph</h1>;
  }

  return (
    <div className="flex flex-col w-full text-center h-screen">
      <div className="flex flex-col items-center justify-center">{GRAPH}</div>

      <form
        className="flex justify-center items-end text-center p-1 w-full h-screen bg-purple-900"
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
            className="text-center p-6 m-6 bg-purple-600"
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
