// import http from "../http-common";
import { useEffect, useState } from "react";

const StudentDataTest = () => {
  const [school, setSchool] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-data-jwxco/service/studentdata/incoming_webhook/studentdata"
    );
    const json = await res.json();
    console.log(json);
  }

  return (
    <div>
      <h1>Test</h1>
      <h2>Test</h2>
    </div>
  );
};

export default StudentDataTest;
