import { http, HttpResponse } from 'msw';

import { MOCK_QUIZ_DTO } from '../data/quiz';

export const handlers = [
  http.get(
    'https://opentdb.com/api.php',
    ({ request, params, cookies }) => {
      // delay the response for 2 seconds
      return HttpResponse.json(MOCK_QUIZ_DTO);
    },
  ),
];
