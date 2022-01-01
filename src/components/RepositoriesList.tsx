import { useState } from "react";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () => {
  const [repoName, setRepoName] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(repoName);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={repoName} onChange={(e) => setRepoName(e.target.value)} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error ? data.map((d) => <div key={d}>{d}</div>) : null}
    </div>
  );
};

export default RepositoriesList;
