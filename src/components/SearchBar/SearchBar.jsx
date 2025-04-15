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
        <div className={CSS.box}> 
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={CSS.form}>
                <Field className={CSS.field} name='query'/>
                <button className={CSS.btn} type='submit'>Search</button>
                
            </Form>
        </Formik>
        </div>
    )
}

export default SearchBar;