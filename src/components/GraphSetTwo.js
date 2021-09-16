/*eslint-disable*/
////Graph Two is to query just for that specific student
// Please feel free to group datapoints into categories (see item 29 or 14 for examples) if it makes sense to do so.
// Bonus if you can show, or explain to us a way we can see the G1, G2, and G3 Grades in a graph corresponding to
// overall health of the student
import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
// prettier-ignore
import {
    RadialBarChart, RadialBar, ScatterChart, Scatter, BarChart, Bar, PieChart, Pie, Cell, ZAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
const GraphParams = () => {
  // prettier-ignore
  const STUDENTDATA = [
    "Student One", "Student 2",
  ];
  const [veryBadHealthGPAHook, setVeryBadHealthHook] = useState("");
  const [badHealthGPAHook, setBadHealthHook] = useState("");
  const [avgHealthGPAHook, setAvgHealthHook] = useState("");
  const [goodHealthGpaHook, setGoodHealthHook] = useState("");
  const [verGoodHealthGPAHook, setVeryGoodHealthHook] = useState("");
  async function fetchStudentData() {
    const res = await fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-data-jwxco/service/studentdata/incoming_webhook/studentdata"
    );
    const json = await res.json();
    let studentData = json.studentData;
    const studentTotal = studentData.length;
    // console.log(studentTotal);
    //----------Overall Health-------------
    // health, famrel, goout, activities, famsup schoolsup, failures, Dalc, Wal
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
    {// Overall Health Hooks
      setVeryBadHealthHook((veryBadHealthGPA / 20) * 100),  setBadHealthHook((badHealthGPA / 20) * 100);
      setAvgHealthHook((avgHealthGPA / 20) * 100), setGoodHealthHook((goodHealthGPA / 20) * 100);
      setVeryGoodHealthHook((veryGoodHealthGPA / 20) * 100);}
  }
  // prettier-ignore
  const data = [
    { name: '18-24', uv: 31.47,pv: 2400, fill: '#8884d8',},
    {
      name: '25-29',
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: '30-34',
      uv: 15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: '35-39',
      uv: 8.22,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: '40-49',
      uv: 8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
    {
      name: '50+',
      uv: 2.63,
      pv: 4800,
      fill: '#d0ed57',
    },
    {
      name: 'unknow',
      uv: 6.67,
      pv: 4800,
      fill: '#ffc658',
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  useEffect(() => {
    fetchStudentData();
  }, []);

  let GRAPH;
  if (studentData === "Student One") {
    GRAPH = (
      <div className="flex-col justify-center items-center ">
        <h1>Student One</h1>
      </div>
    );
  } else if (studentData === "Student two") {
    GRAPH = (
      <div className="flex-col justify-center items-center ">
        <h1>Student Two</h1>
      </div>
    );
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>

    //   {/* <form
    //     className="flex justify-center items-end text-center p-1 w-full h-screen bg-purple-900"
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       fetchStudentData();
    //     }}
    //   >
    //     <label
    //       htmlFor="data"
    //       className="flex flex-row justify-center items-center p-6 m-6 w-full "
    //     >
    //       Select Data to Display
    //       <select
    //         name="data"
    //         className="text-center p-6 m-6 bg-purple-600"
    //         id="studentData"
    //         value={studentData}
    //         onChange={(e) => setStudentData(e.target.value)}
    //         onBlur={(e) => setStudentData(e.target.value)}
    //       >
    //         {STUDENTDATA.map((studentData) => (
    //           <option value={studentData} key={studentData}>
    //             {studentData}
    //           </option>
    //         ))}
    //       </select>
    //     </label>
    //   </form> */}
  );
};

export default GraphParams;
