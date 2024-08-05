import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };

  useDispatch();
  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input className={css.searchInput} type="text" onChange={handleSearch} />
    </div>
  );
}
