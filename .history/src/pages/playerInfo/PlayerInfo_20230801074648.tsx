import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import styles from './playerInfo.module.sass';
import { useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPlayerInfo } from '../../modules/playerInfo/playerInfoSelector';

const PlayerInfo: FC = () => {
  const params = useParams();
  const { id } = params;
  const { name, number, position, height, weight, birthday, avatarUrl, teamName } =
    useAppSelector(selectPlayerInfo);

  const calculateAge = (birthDateString: string) => {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    const age = Math.floor(diffInDays / 365.25);
    return age;
  };

  if (!id) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs page="Players" item={name} />
          <div>
            <EditIcon path="/updatePlayer" id={+id} />
            <DeleteIcon id={+id} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.containerImage}>
            <img src={`http://dev.trainee.dex-it.ru${avatarUrl}`} alt="player" />
          </div>
          <div>
            <h1 className={styles.name}>
              {name} <span>#{number}</span>
            </h1>
            <div className={styles.details}>
              <div>
                <h2>Position</h2>
                <p>{position}</p>
              </div>
              <div>
                <h2>Team</h2>
                <p>{teamName}</p>
              </div>
            </div>
            <div className={styles.details}>
              <div>
                <h2>Height</h2>
                <p>{height} cm</p>
              </div>
              <div>
                <h2>Weight</h2>
                <p>{weight} cm</p>
              </div>
            </div>
            <div className={styles.age}>
              <h2>Age</h2>
              <p>{calculateAge(birthday)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
