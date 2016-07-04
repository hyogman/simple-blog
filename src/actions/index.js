import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=fkjldsajiejiofjoiewjviimejwovit942308540395u43v09nf43u95v4w493utvijrlaiv';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); 

	return {	
		type: FETCH_POSTS,
		payload: request 

	};


}