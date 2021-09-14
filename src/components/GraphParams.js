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
    "Internet Access",
    "Past Failures",
    "Study Time",
    "Number of Absences",
    "Overall Student Health",
  ];
  const [studentData, setStudentData] = useState("Internet Access");
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
        intAccArr.push(parseInt(item.G3));
      }
    });
    const intAccAvergage =
      intAccArr.reduce((a, b) => a + b, 0) / intAccArr.length;
    //----------NO Internet Access GPA-------------
    let noIntAccArr = [];
    studentData.filter((item) => {
      if (item.internet === "no") {
        noIntAccArr.push(parseInt(item.G3));
      }
    });
    const noIntAverage =
      noIntAccArr.reduce((a, b) => a + b, 0) / noIntAccArr.length;
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
  }

  const internetData = [
    {
      name: "Internet vs No Internet GPA",
      uv: iAVGHook,
      pv: noIAVGHook,
      amt: 100,
    },
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

  useEffect(() => {
    fetchStudentData();
  }, []);

  let GRAPH;
  if (studentData === "Internet Access") {
    GRAPH = (
      <div>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={internetData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /> <YAxis /> <Tooltip /> <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (studentData === "Past Failures") {
    GRAPH = (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={failData} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (studentData === "Study Time") {
    GRAPH = (
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="Avg Study hrs" />
        <YAxis type="number" dataKey="y" name="weight" unit="Avg Grade" />
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
    GRAPH = <h1>Number of Absences</h1>;
  } else if (studentData === "Overall Student Health") {
    GRAPH = <h1>Overall Student Health</h1>;
  } else {
    <h1>Select Graph</h1>;
  }

  return (
    <div className="flex flex-col w-full text-center">
      <div>
        <form
          className="flex flex-row justify-center text-center p-1"
          onSubmit={(e) => {
            e.preventDefault();
            fetchStudentData();
          }}
        >
          <label htmlFor="data" className="p-1 m-1">
            Select Data to Display
            <select
              name="data"
              className="text-center bg-red-200 p-1"
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
          {/* <button>Submit</button> */}
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">{GRAPH}</div>
    </div>
  );
};

export default GraphParams;
