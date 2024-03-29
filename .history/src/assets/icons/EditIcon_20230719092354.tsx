import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IEditIcon {
  path: string;
  id: number;
}

const EditIcon: FC<IEditIcon> = ({ path, id }) => {
  return (
    //@ts-ignore
    <Link to={{ pathname: path, state: { id } }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.7089 5.63151C21.0989 6.02151 21.0989 6.65151 20.7089 7.04151L18.8789 8.87151L15.1289 5.12151L16.9589 3.29151C17.1458 3.10426 17.3994 2.99902 17.6639 2.99902C17.9285 2.99902 18.1821 3.10426 18.3689 3.29151L20.7089 5.63151ZM2.99878 20.5015V17.4615C2.99878 17.3216 3.04878 17.2015 3.14878 17.1015L14.0588 6.19155L17.8088 9.94155L6.88878 20.8515C6.79878 20.9515 6.66878 21.0015 6.53878 21.0015H3.49878C3.21878 21.0015 2.99878 20.7815 2.99878 20.5015Z"
          fill="#9C9C9C"
        />
      </svg>
    </Link>
  );
};

export default EditIcon;
