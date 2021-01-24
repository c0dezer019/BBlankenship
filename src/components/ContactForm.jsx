import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { init } from 'emailjs-com';
import { Button, Grid, TextField } from '@material-ui/core';
import classNames from 'classnames';
import contactFormStyle from '../styles/material_ui/contactFormStyle';
import styles from '../styles/sass/contact.module.css';

const ContactForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const classes = contactFormStyle();

  useEffect(() => {
    init('user_w9WaYDdbti6jFxoH7rlfr');
  });

  return (
    <form className={ styles.contactForm } id="contactForm" onSubmit={ handleSubmit(onSubmit) }>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 6 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="John Doe"
            id="nameField"
            label="Name"
            name="name"
            ref={ register({ required: true }) }
            variant="outlined"
          />
          { errors.name && 'Name is required.' }
        </Grid>
        <Grid item xs={ 6 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="email@example.com"
            className={ classes.fields }
            id="emailField"
            label="Email"
            name="email"
            ref={ register({
              // eslint-disable-next-line max-len
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
              required: true,
            }) }
            type="email"
            variant="outlined"
          />
          { errors.email && 'Email is required.' }
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="Subject"
            className={ classes.fields }
            id="subjectField"
            label="Subject"
            name="subject"
            ref={ register({ required: true }) }
            variant="outlined"
          />
          { errors.subject && 'Subject is required.' }
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="Message"
            className={ classes.fields }
            id="messageField"
            label="Message body"
            name="message"
            ref={ register({ required: true }) }
            multiline
            rows={ 10 }
            variant="outlined"
          />
          { errors.message && 'You can\'t expect me to respond to an empty message!' }
        </Grid>
        <Grid item xl={ 3 }>
          <Button color="primary" label="Submit" type="submit" variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
