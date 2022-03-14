function ShowErrorMessage({ errorMessage , className}) {
  return <div className={className} style={{ color: "red" }}>{errorMessage}</div>;
}

export default ShowErrorMessage;
