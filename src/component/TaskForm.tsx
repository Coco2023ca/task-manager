import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import categories from '../categories'; // Import your categories file
import moment from "moment";

interface Task {
    id:number;
    title: string;
    dueDate: Date;
    category: string;
  }

interface TaskFormProps{
    addTask:(task:Task)=>void;
}

const TaskForm: React.FC<TaskFormProps>= ({ addTask }) => {
const validationSchema = Yup.object().shape({
    id:Yup.number().required('Task ID'),
    title: Yup.string()
      .required('Task Title is required'),
    dueDate: Yup.date()
      .required('Due date is required'),
    category: Yup.string()
      .oneOf(categories, 'Invalid category')
      .required('Category is required'),
  });
  
 

  
    return (
      <Formik
        initialValues={{ 
          id:moment().unix(),
          title: '',
          dueDate: moment().format("YYYY-MM-DD"),
          category: '',
      }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {

            const newvalues ={
                id:moment().unix(),
                title: values.title,
                dueDate: moment(values.dueDate).toDate(),
                category: values.category,
            }
            
            addTask(newvalues);
           resetForm(); // Clear the form after submission
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title : </label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
  
          <div>
            <label htmlFor="dueDate">Due Date : </label>
            <Field type="date" id="dueDate" name="dueDate" />
            <ErrorMessage name="dueDate" component="div" className="error" />
          </div>
  
          <div>
            <label htmlFor="category">Category : </label>
            <Field as="select" id="category" name="category">
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="error" />
          </div>
  
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
  
  export default TaskForm;
  
  