import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  // consume the state
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories[0]);
  const handleLick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      {!categories && <button type="submit" onClick={handleLick}>Check Status</button>}
      <h2>{categories}</h2>
    </>

  );
}
