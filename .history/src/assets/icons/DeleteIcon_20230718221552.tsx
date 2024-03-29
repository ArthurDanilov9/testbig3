import { FC } from 'react';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { deleteTeam } from '../../modules/teamInfo/teamInfoThunk';

interface IDeleteIcon {
  id: number | null;
}

const DeleteIcon: FC<IDeleteIcon> = ({ id }) => {
  const dispatch = useAppDispatch();

  const deleteItem = async () => {
    if (id) {
      await dispatch(deleteTeam(id));
    }
  };

  return (
    <svg
      onClick={deleteItem}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5001 4H18.0001C18.5501 4 19.0001 4.45 19.0001 5C19.0001 5.55 18.5501 6 18.0001 6H6.00006C5.45006 6 5.00006 5.55 5.00006 5C5.00006 4.45 5.45006 4 6.00006 4H8.50006L9.21006 3.29C9.39006 3.11 9.65006 3 9.91006 3H14.0901C14.3501 3 14.6101 3.11 14.7901 3.29L15.5001 4ZM7.99998 21C6.89998 21 5.99998 20.1 5.99998 19V9.00004C5.99998 7.90004 6.89998 7.00004 7.99998 7.00004H16C17.1 7.00004 18 7.90004 18 9.00004V19C18 20.1 17.1 21 16 21H7.99998Z"
        fill="#E4163A"
      />
    </svg>
  );
};

export default DeleteIcon;
