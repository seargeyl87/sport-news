import "./NewsDetails.css";
import Comments from "../Comments/Comments";
import ReadMore from "../ReadMore/ReadMore";
import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import { Link } from "react-router-dom";
import { CalendarStrings } from "../Common/Dates";
import Moment from 'react-moment';

const NewsDetails = ({ topRef }) => {
    const [info, setInfo] = useState([]);
    const [newsItem, setNewsItem] = useState([]);
    const [listTags, setListTags] = useState([]);
    const [date, setDate] = useState();
    const { id } = useParams();

    async function getNewsItem() {
        const response = PostService.getOpendNews(id).then((resp) => {
            setNewsItem(resp);
            resp.tags = resp.tags?.filter(x => x);
            setListTags(resp.tags);
            setDate(resp.date);
        });
    }

    async function getInfo() {
        const response = await PostService.getInfo();
        const siteResponse = await PostService.getInfoForPost(response ?? "", "1", "1");
        setInfo(siteResponse?.content)
    }

    function handleBackClick() {
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useMemo(() => {
        getNewsItem();
        getInfo();
    }, [id]);

    useEffect(() => {
        handleBackClick();
    }, []);

    return (
        <div className="news-opened">
            <div
                className="news-opened__pict"
                style={{
                    backgroundImage: `url(${newsItem.imageUrl})`,
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="news-opened__body">
                <div className="news-opened__tags-date">
                    <div className="news-opened__tags">
                        {listTags.map((item, index) => (
                            <Link to={`/news/tag/${item}/`} key={index}>
                                <div>{item}</div>
                            </Link>
                        ))}
                    </div>
                    <div className="news-opened__date">
                        <Moment calendar={CalendarStrings} date={newsItem.date}></Moment>
                    </div>
                </div>

                <div className="news-opened__head">{newsItem.header1}</div>
                <div className="news-opened__description">{newsItem.header2}</div>
                <div className="news-opened__description">
                    {<div dangerouslySetInnerHTML={{ __html: newsItem.content }} />}
                </div>
                <div className="news-opened__info">
                    {<div dangerouslySetInnerHTML={{ __html: info }} />}
                </div>
                <Comments />
                <ReadMore handleBackClick={handleBackClick} />
            </div>
        </div>
    );
};

export default NewsDetails;
