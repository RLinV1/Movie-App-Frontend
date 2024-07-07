// pages/api/movies.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiUrl = 'https://movie-app-backend-pg9u.onrender.com/api/v1/movies';
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}
