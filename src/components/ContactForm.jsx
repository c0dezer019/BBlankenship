import React, { useEffect, useState } from 'react';
import { init, sendForm } from 'emailjs-com';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import NotifierModal from './NotifierModal';
import contactFormStyle from '../styles/material_ui/contactFormStyle';
import styles from '../styles/sass/contact.module.css';

const ContactForm = () => {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [err, setErr] = useState({});
  const [answer, setAnswer] = useState('');

  const classes = contactFormStyle();
  const securityAnswer = 'The Matrix';

  const resetForm = () => {
    setFromName('');
    setFromEmail('');
    setSubject('');
    setMessage('');
    setAnswer('');
  };

  const resetStatus = () => {
    if (messageSent) setMessageSent(false);
    setErr({});
    setSendFailed(false);
  };

  const handleChange = e => {
    if (e !== undefined) {
      switch (e.target.name) {
        case 'answer':
          setAnswer(e.target.value);
          break;
        case 'from_email':
          setFromEmail(e.target.value);
          break;
        case 'from_name':
          setFromName(e.target.value);
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

  const handleSubmit = e => {
    e.preventDefault();
    if (answer !== '') {
      if (answer === securityAnswer) {
        sendForm('service_9zltocb', 'template_kkt9e5f', '#contactForm').then(response => {
          setMessageSent(true);
          resetForm();
        }, error => {
          setSendFailed(true);
          setErr(error);
        });
      }
    }
    console.log('Not verified');
  };

  useEffect(() => {
    init('user_w9WaYDdbti6jFxoH7rlfr');
  }, []);

  return (
    <Container id="contactFormContainer" maxWidth="xl">
      <form className={ styles.contactForm } id="contactForm" onSubmit={ handleSubmit }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 6 }>
            <TextField
              aria-labelledby="contactForm"
              aria-placeholder="John Doe"
              className={ classes.fields }
              id="nameField"
              label="Name"
              name="from_name"
              onChange={ handleChange }
              value={ fromName }
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
              name="from_email"
              onChange={ handleChange }
              type="email"
              value={ fromEmail }
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
              value={ subject }
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
              value={ message }
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
              value={ answer }
              required
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
      { messageSent && (<NotifierModal message="Message sent!" resetStatus={ resetStatus } signal="open" />) }
      { sendFailed && (
        <NotifierModal
          message="Failed to send. Please notify website owner with error message:"
          error={ err }
          resetStatus={ resetStatus }
          signal="open"
        />
      ) }
    </Container>
  );
};

export default ContactForm;
