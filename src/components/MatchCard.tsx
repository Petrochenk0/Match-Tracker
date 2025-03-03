import { Match } from '../types/match';
import teamIcon from '../assets/icon.jpg';
import styles from './MatchCard.module.css';

interface MatchCardProps {
  match: Match;
}

export const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusClassName = (status: Match['status']) => {
    switch (status) {
      case 'Ongoing':
        return styles.statusOngoing;
      case 'Scheduled':
        return styles.statusScheduled;
      default:
        return styles.statusFinished;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.team}>
        <img className={styles.teamLogo} src={teamIcon} alt="Team icon" />
        <div>{match.homeTeam.name}</div>
      </div>
      <div className={styles.scoreContainer}>
        <div className={styles.score}>
          {match.homeScore} : {match.awayScore}
        </div>
        <div className={getStatusClassName(match.status)}>{match.status}</div>
      </div>
      <div className={styles.teamRight}>
        <div>{match.awayTeam.name}</div>
        <img className={styles.teamLogo} src={teamIcon} alt="Team icon" />
      </div>
    </div>
  );
};
