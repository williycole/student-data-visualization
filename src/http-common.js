import axios from "axios";

export default axios.create({
  baseURL:
    "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-data-jwxco/service/studentdata/incoming_webhook/studentdata",
  headers: {
    "Content-type": "application/json",
  },
});
