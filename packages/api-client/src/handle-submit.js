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

  body ??= Object.fromEntries(
    fields.map(field => [field, event.target.elements[field].value]),
  );

  body = JSON.stringify(body);

  callApi(params, { body })
    .then(res => res.json())
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
