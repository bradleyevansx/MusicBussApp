class LocalStorageService<T> {
  setItem = (key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getItem = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  removeItem = (key: string) => {
    localStorage.removeItem(key);
  };
}

export default LocalStorageService;
