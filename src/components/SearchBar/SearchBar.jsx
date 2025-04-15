import { Field, Formik, Form } from 'formik'


const SearchBar = () => {
    const initialValues = {
        query: '',
    }

    const handleSubmit = (values, options) => {
     console.log(values);
     options.resetForm();
    }

    return(
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                <Field name='query'/>
                <button type='submit'>Search</button>
                
            </Form>
        </Formik>
    )
}

export default SearchBar;