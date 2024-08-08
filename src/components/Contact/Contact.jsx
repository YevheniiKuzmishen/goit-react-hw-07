// import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const hendleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <p className={css.name}>
        <IoPerson className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhone className={css.icon} />
        {number}
      </p>

      <button type="button" className={css.deleteBtn} onClick={hendleDelete}>
        Delete
      </button>
    </div>
  );
}
