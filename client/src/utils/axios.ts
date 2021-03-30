import _axios from 'axios';
import { BASEURL } from './urls';

export default _axios.create({ baseURL: BASEURL });
