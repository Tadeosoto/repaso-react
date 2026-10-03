export const NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};
