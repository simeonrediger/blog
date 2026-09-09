import ApiContext from './ApiContext.js';

export default function ApiProvider({ api, children }) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
