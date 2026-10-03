export const LoadingLabel = ({ loading, label }) => {
  return <>{loading ? <p>Loading...</p> : <p>{label}</p>}</>;
};
