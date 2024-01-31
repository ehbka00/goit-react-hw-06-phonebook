import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleOnChange = event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={handleOnChange} />
    </>
  );
};
