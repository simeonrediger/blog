import applyAuth from './apply-auth.js';

export default function handleSubmit({
  event,
  callApi,
  params,
  token,
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

  if (token) {
    applyAuth(options, token);
  }

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
