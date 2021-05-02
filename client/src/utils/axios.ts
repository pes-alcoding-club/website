import _axios from 'axios';
import { BASEURL } from '../config';

export default _axios.create({ baseURL: BASEURL });
