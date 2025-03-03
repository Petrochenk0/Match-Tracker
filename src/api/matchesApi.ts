import axios from 'axios';
import { ApiResponse, MatchesResponse } from '../types/match';

const BASE_URL = 'https://app.ftoyd.com/fronttemp-service';

export const fetchMatches = async (): Promise<MatchesResponse> => {
  const response = await axios.get<ApiResponse<MatchesResponse>>(`${BASE_URL}/fronttemp`);
  return response.data.data;
};
