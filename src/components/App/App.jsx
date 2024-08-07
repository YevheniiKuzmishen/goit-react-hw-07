import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Error from "../Error/error";
import Loader from "../Loader/loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contactsBook}>
      <h1 className={css.titleBook}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {isError && (
        <Error>Contacts are not available, please try again later...</Error>
      )}
      <ContactList />
    </div>
  );
}
