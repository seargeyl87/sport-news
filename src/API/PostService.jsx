import axios from "axios";


export default class PostService {
    static async getListNewsItem(tag, limit, page) {
        const response = await axios.get(`http://localhost:3000/listNewsItem`, {
            params: {
                _limit: limit,
                _page: page,
                tags_like: tag
            }
        });
        return response;
    };
    static async getOpendNews(currentID=1) {
        const response = await axios.get(`http://localhost:3000/newsOpend?id=${currentID}`);
        return response.data[0];
    };
    static async getNewsReadMore(limit, page) {
        const response = await axios.get("http://localhost:3000/newsReadMore", {
            params: {
                _limit: limit,
                _page: page
            } 
        });
        return response.data;
    };
    static async getNewsModalSearch() {
        const response = await axios.get("http://localhost:3000/newsModalSearch");
        return response;
    };

    static async getNewsComments(id, limit, page) {
        const response = await axios.get(`http://localhost:3000/comments?newsId=${id}`, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    };
    static async postNewsComment(inputName, inputPost, newsId) {
        const response = await axios.post(`http://localhost:3000/comments`, {
            
            name: inputName,
            text: inputPost,
            newsId: newsId,
            
        });
        return response;
    };
}

