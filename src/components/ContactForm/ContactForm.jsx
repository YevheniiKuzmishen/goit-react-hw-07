import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const contactShema = Yup.object().shape({
    contactname: Yup.string()
      .min(3, "Minimum 3 symbols!")
      .max(50, "Maximum 50 symbols!")
      .required("Name is required"),
    contactnumber: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{4}$/, "Number format should be 888-888-8888")
      .required("Number is required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.contactname,
      number: values.contactnumber,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        contactname: "",
        contactnumber: "",
      }}
      validationSchema={contactShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formBox}>
          <div>
            <label className={css.label} htmlFor="contactname">
              {" "}
              Name
            </label>
            <Field className={css.input} type="text" name="contactname" />
            <ErrorMessage
              className={css.formError}
              name="contactname"
              component="span"
            />
          </div>
          <div>
            <label className={css.label} htmlFor="contactnumber">
              {" "}
              Number
            </label>
            <Field
              className={css.input}
              type="tel"
              name="contactnumber"
              placeholder="888-888-8888"
            />
            <ErrorMessage
              className={css.formError}
              name="contactnumber"
              component="span"
            />
          </div>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
