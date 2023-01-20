import "./ReadMore.css";
import ReadMoreItem from "../ReadMoreItem/ReadMoreItem";

function ReadMore() {
  return (
    <div className="read-more">
        <div className="read-more__head">Read more</div>
        <ReadMoreItem/>
        <ReadMoreItem/>
        <ReadMoreItem/>
        <ReadMoreItem/>


    </div>
  );
}

export default ReadMore;
