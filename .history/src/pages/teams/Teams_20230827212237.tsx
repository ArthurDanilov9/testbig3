import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTeam from '../../modules/teams/components/cardTeam/CardTeam';
import styles from './teams.module.sass';
import Pagination from '../../common/components/pagination/Pagination';
import SelectCardsCount from '../../common/components/selectPageSize/SelectPageSize';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { getTeams } from '../../modules/teams/teamsThunk';
import EmptyTeamList from '../../modules/teams/components/emptyTeamList/EmptyTeamList';
import Button from '../../common/components/button/Button';
import { selectTeams } from '../../modules/teams/teamsSelector';
import { clearTeamInfo } from '../../modules/teamInfo/teamInfoSlice';
import SearchInput from '../../common/components/searchInput/SearchInput';
import { setAlert } from '../../modules/alert/alertSlice';

const Teams: FC = () => {
  const [name, setName] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(6);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, page, count, isLoading, error } = useAppSelector(selectTeams);
  const prevNameRef = useRef<string>('');
  const prevSizeRef = useRef<number>(0);

  const addClick = () => {
    dispatch(clearTeamInfo());
    navigate('/addTeam');
  };

  const fetchTeams = async (name: string, page: number, pageSize: number) => {
    await dispatch(getTeams({ name, page, pageSize }));
  };

  console.log(name, currentPage, selectedSize);

  useEffect(() => {
    if (!error) {
      if (prevNameRef.current !== name || prevSizeRef.current !== selectedSize) {
        fetchTeams(name, 1, selectedSize);
      } else {
        fetchTeams(name, currentPage, selectedSize);
      }
    } else if (error == 404) {
      dispatch(setAlert({ showed: true, message: 'Not found!', type: 'failure' }));
    }
    prevNameRef.current = name;
    prevSizeRef.current = selectedSize;
  }, [name, currentPage, selectedSize]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchInput setName={setName} />
        <Button typeButton="add" onClick={addClick}>
          Add +
        </Button>
      </div>
      {isLoading ? (
        <div style={{ fontSize: '30px' }}>Loading</div>
      ) : data && data.length ? (
        <>
          <div className={styles.teamList}>
            {data && data.map((team) => <CardTeam key={team.id} {...team} />)}
          </div>
          <div className={styles.bottom}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              page={page}
              pageCount={Math.ceil(count / selectedSize)}
            />
            <SelectCardsCount setSelectedSize={setSelectedSize} />
          </div>
        </>
      ) : (
        <EmptyTeamList />
      )}
    </div>
  );
};

export default Teams;
