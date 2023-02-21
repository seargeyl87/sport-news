import axios from "axios";

const _apiUrl = "https://api.football-news.co/api";

 

export default class PostService {
    static async getListNewsItem(tag, page) {
        const response = await axios.get(`${_apiUrl}/post/getlist`, {
            params: {
                currentPageIndex: page,
                tag: tag
            }
        });
        return response;
    };

    static async getOpendNews(newsID) {
        const response = await axios.get(`${_apiUrl}/post/GetByID`, {
            params: {
                id: newsID
            } 
        }
        );
        return response.data;
    };


    static async getNewsReadMore(newsID, page = 0) {
        const response = await axios.get(`${_apiUrl}/post/related`, {
            params: {
                newsID: newsID,
                currentPageIndex: page
            } 
        });
        return response.data;
    };



    static async getNewsModalSearch(searchQuery) {
        const response = await axios.get(`${_apiUrl}/post/getlist`, {
            params: {
                searchQuery: searchQuery
            }
        });
        return response;
    };

    static async getNewsComments(newsId, pageIndex) {
        const response = await axios.get(`${_apiUrl}/comment/get`, {
            params: {
                id: newsId,
                page: pageIndex
            }
        });
        return response;
    };
    

    static async postNewsComment(name, text, newsId) {
        const response = await axios.post(`${_apiUrl}/comment/post`, {
            name: name,
            text: text,
            postID: newsId,
            
        });
        return response;
    };



    static async getTags() {
        const response = await axios.get(`${_apiUrl}/tag/get`);
        return response.data;
    };

}

