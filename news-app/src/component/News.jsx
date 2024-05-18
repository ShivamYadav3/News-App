import { useState, useEffect } from "react";
import axios from "axios";
import ChildComp from "./ChildComp";
import { Card } from "./style";

const News = () => {
  const [news, setNews] = useState([]);
  const [date, setDate] = useState(new Date().getDate());

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2023-10-03&sortBy=popularity&apiKey=${yourKey}`
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
