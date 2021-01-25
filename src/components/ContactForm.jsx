import React, { useEffect, useState } from 'react';
import { init } from 'emailjs-com';
import { Button, Grid, TextField } from '@material-ui/core';
import contactFormStyle from '../styles/material_ui/contactFormStyle';
import styles from '../styles/sass/contact.module.css';

const ContactForm = () => {
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const classes = contactFormStyle();
  const securityAnswer = 'The Matrix';

  const handleChange = e => {
    if (e !== undefined) {
      switch (e.target.name) {
        case 'answer':
          setAnswer(e.target.value);
          break;
        case 'name':
          setSenderName(e.target.value);
          break;
        case 'email':
          setEmail(e.target.value);
          break;
        case 'subject':
          setSubject(e.target.value);
          break;
        case 'message':
          setMessage(e.target.value);
          break;

        default:
          break;
      }
    }
  };

  const handleSubmit = () => {
    if (answer !== '') {
      if (answer === securityAnswer) {
        console.log('you pass!');
      }
    }
    console.log('Not verified');
  };

  useEffect(() => {
    init('user_w9WaYDdbti6jFxoH7rlfr');
  }, []);

  return (
    <form className={ styles.contactForm } id="contactForm" onSubmit={ handleSubmit }>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 6 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="John Doe"
            className={ classes.fields }
            id="nameField"
            label="Name"
            name="name"
            onChange={ handleChange }
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={ 6 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="email@example.com"
            className={ classes.fields }
            id="emailField"
            label="Email"
            name="email"
            onChange={ handleChange }
            type="email"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="Subject"
            className={ classes.fields }
            id="subjectField"
            label="Subject"
            name="subject"
            onChange={ handleChange }
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="Message"
            className={ classes.fields }
            id="messageField"
            label="Message body"
            name="message"
            onChange={ handleChange }
            multiline
            rows={ 10 }
            variant="outlined"
            required
          />
        </Grid>
        <Grid className={ classes.gridCell } item xs={ 12 }>
          <p>What movie is the phrase: &quot;There is no spoon&quot; from?</p>
          <TextField
            aria-labelledby="contactForm"
            aria-placeholder="Answer"
            className={ classes.fields }
            id="botCheck"
            label="Answer"
            name="answer"
            onChange={ handleChange }
            variant="outlined"
          />
        </Grid>
        <Grid className={ classes.gridCell } item xs={ 12 }>
          <Button
            color="primary"
            id="submitButton"
            label="Submit"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
