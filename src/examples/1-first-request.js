import { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData()
    // console.log(" axios request");
  }, []);

  return <h2 className="text-center"> {} </h2>;
};
export default FirstRequest;
