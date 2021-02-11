import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fetchShow as mockfetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

// test('renders with no errors', () => {
//     render(<App />)
// });
test('fecthed data renders properly', async () => {
    mockfetchShow.mockResolvedValueOnce({
      _embedded.episodes: [
          {episode_name: 'Episode 1', episode_id : 1}
      ]
    })
    render(<App />)
    
})