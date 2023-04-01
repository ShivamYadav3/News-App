import { useState, useEffect } from "react";
import axios from "axios";
import ChildComp from "./ChildComp";
import { Card } from "./style";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2023-03-31&sortBy=popularity&apiKey=8828304fe5be42869fcd970a103ec596"
      )
      .then((res) => {
        setNews(res.data.articles);
        console.log(res);
      });
  }, []);
  return (
    <Card>
      {news.map((item, index) => (
        <ChildComp key={index} data={item} />
      ))}
    </Card>
  );
};
export default News;
