export default function handleSubmit({
  event,
  callApi,
  params,
  fields,
  handleData,
  handleError,
}) {
  event.preventDefault();
  const form = event.target;

  const body = JSON.stringify(
    Object.fromEntries(
      fields.map(field => [field, form.elements[field].value]),
    ),
  );

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
