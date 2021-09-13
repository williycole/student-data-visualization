// import http from "../http-common";
import { useEffect, useState } from "react";

const StudentDataQuery = (props) => {
  // TODO: SET Others after school is working
  // const [school, setSchool] = useState("");
  // const [pastFailures, setPastFailures] = useState("");
  // const [studyTime, setStudyTime] = useState("");
  // const [overallGradeHealth, setOverallGradeHealth] = useState("");

  const [internetAccess, setInternetAccess] = useState("");
  const [noInternetAccess, setNoInternetAccess] = useState("");
  async function fetchData() {
    const res = await fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-data-jwxco/service/studentdata/incoming_webhook/studentdata"
    );
    const json = await res.json();
    // console.log(json);
    const studentData = json.studentData;
    const TotalStudentDataCount = studentData.length;
    const internetAccess = studentData.filter((element) => {
      return element.internet === "yes";
    }).length;
    const noInternetAccess = TotalStudentDataCount - internetAccess;
    setNoInternetAccess(noInternetAccess);
    setInternetAccess(internetAccess);

    console.log(studentData);
    console.log(TotalStudentDataCount);
    console.log(
      `
      Students with Internet --> ${internetAccess}\n
      Students No Internet --> ${noInternetAccess}
   `
    );
    // return studentData, internetAccess;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <select
      name="data"
      className="text-center bg-red-200"
      onChange={this.change}
      value={this.state.value}
    >
      <option value="Internet Access">Internet Access</option>
      <option value="Past Failures">Past Failures</option>
      <option value="Study Time">Study Time</option>
      <option value="Number of Absences">Number of Absences</option>
      <option value="Overall Student Grade">
        Overall Student Grade Health
      </option>
    </select>
  );
};

export default StudentDataQuery;
