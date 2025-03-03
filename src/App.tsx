import { useEffect, useState } from 'react';
import { fetchMatches } from './api/matchesApi';
import { MatchCard } from './components/MatchCard';
import { Match } from './types/match';
import refreshIcon from './assets/Refresh.jpg';
import styles from './App.module.css';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadMatches = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchMatches();
      setMatches(data.matches);
    } catch (_) {
      setError('Ошибка: не удалось загрузить информацию');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Match Tracker</h1>
        <button className={styles.refreshButton} onClick={loadMatches} disabled={loading}>
          {loading ? (
            <div className={styles.loadingSpinner} />
          ) : (
            <>
              Обновить
              <img className={styles.refreshIcon} src={refreshIcon} alt="Refresh" />
            </>
          )}
        </button>
      </header>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {loading ? (
        <div className={styles.loadingSpinner} />
      ) : (
        matches.map((match, index) => <MatchCard key={index} match={match} />)
      )}
    </div>
  );
}

export default App;
