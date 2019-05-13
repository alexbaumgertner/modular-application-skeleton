import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'semantic-ui-react'

import './CatalogItemEdit.css'

class CatalogItemEdit extends Component {
  render() {
    const {
      name,
      image,
      text,
      price,
      productAdjective,
      department,
      date,
    } = this.props.item


    return (
      <Formik
        className="catalog-item-edit"
        initialValues={{
          name,
          image,
          text,
          date,
          price,
          productAdjective,
          department,
        }}
        onSubmit={(values, { setSubmitting }) => {
          this.props.onSubmit(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="catalog-item-edit__form">

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">name:</label>
              <div className="catalog-item-edit__field">
                <Field name="name" className="catalog-item-edit__field-component" />
                <ErrorMessage name="name" component="div" />
              </div>
            </div>

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">image:</label>
              <div className="catalog-item-edit__field">
                <Field name="image" className="catalog-item-edit__field-component" />
                <ErrorMessage name="image" component="div" />
              </div>
            </div>

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">text:</label>
              <div className="catalog-item-edit__field">
                <Field name="text" component="textarea" rows={10} className="catalog-item-edit__field-component" />
                <ErrorMessage name="text" component="div" />
              </div>
            </div>

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">date:</label>
              <div className="catalog-item-edit__field">
                <Field name="date" className="catalog-item-edit__field-component" />
                <ErrorMessage name="date" component="div" />
              </div>
            </div>

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">price:</label>
              <div className="catalog-item-edit__field">
                <Field name="price" className="catalog-item-edit__field-component" />
                <ErrorMessage name="price" component="div" />
              </div>
            </div>

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">productAdjective:</label>
              <div className="catalog-item-edit__field">
                <Field name="productAdjective" className="catalog-item-edit__field-component" />
                <ErrorMessage name="productAdjective" component="div" />
              </div>
            </div>

            <div className="catalog-item-edit__item">
              <label className="catalog-item-edit__label">department:</label>
              <div className="catalog-item-edit__field">
                <Field name="department" className="catalog-item-edit__field-component" />
                <ErrorMessage name="department" component="div" />
              </div>
            </div>

            <Button type="submit" positive disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
}

CatalogItemEdit.propTypes = {
  item: PropTypes.object,
}

export default CatalogItemEdit
