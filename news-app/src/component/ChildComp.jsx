import { Link, Card } from "./style";
const ChildComp = (props) => {
  const { title, author, content, description, urlToImage, url } = props.data;
  return (
    <div>
      <Link href={url}>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <img src={urlToImage} alt="" width="250" />
        <div>Content: {content}</div>
      </Link>
    </div>
  );
};
export default ChildComp;
