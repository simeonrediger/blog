import { applyAuth } from '../auth/access-token.js';

export default function handleSubmit({
  event,
  callApi,
  params,
  body,
  fields,
  handleData,
  handleError,
}) {
  event?.preventDefault();

  if (fields) {
    body = Object.fromEntries(
      fields.map(field => [field, event.target.elements[field].value]),
    );
  }

  const options = {};
  applyAuth(options);

  if (body) {
    options.body = JSON.stringify(body);
  }

  callApi(params ?? options, params ? options : undefined)
    .then(res => {
      return res.status === 204 ? {} : res.json();
    })
    .then(data => {
      if (!data.errors && data.error) {
        data.errors = [data.error];
      }

      if (data.errors?.length > 0) {
        return handleError(data.errors);
      }

      handleData(data);
      handleError(null);
    })
    .catch(handleError);
}
