function useLocalStorage(key, value) {
  const data = localStorage.getItem(key, value);
  return <div>useLocalStorage</div>;
}

export default useLocalStorage;
