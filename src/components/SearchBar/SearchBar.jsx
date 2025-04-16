import { Field, Formik, Form } from 'formik'
import css from "./SearchBar.module.css"

const SearchBar = ({ handleChangeQuery }) => {
    const initialValues = {
        query: '',
    }

    const handleSubmit = (values, options) => {
     console.log(values);
     handleChangeQuery(values.query)
     options.resetForm();
    }

    return(
        <header className={css.box}> 
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={css.form}>
                <Field className={css.field} name='query' placeholder='your query'/>
                <button className={css.btn} type='submit'>Search</button>
                
            </Form>
        </Formik>
        </header>
    )
}

export default SearchBar;