import {isArray} from 'underscore';

export const extraParams = (body: any) => {
  if (Object.keys(body).length === 0) {
    return '';
  }
  let length = Object.keys(body).length;
  let query = '?';
  Object.keys(body).map((key: string, index) => {
    if (body[key] || body[key] === 0 || body[key] === '') {
      if (isArray(body[key])) {
        query +=
          `${key}=${encodeURIComponent(JSON.stringify(body[key]))}` +
          (index + 1 !== length ? '&' : '');
      } else {
        query +=
          `${key}=${encodeURIComponent(body[key])}` +
          (index + 1 !== length ? '&' : '');
      }
    }
  });
  return query;
};
