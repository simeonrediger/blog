export default function DateTime({ value }) {
  return (
    <span>
      {new Date(value).toLocaleString(undefined, {
        dateStyle: 'short',
        timeStyle: 'short',
      })}
    </span>
  );
}
