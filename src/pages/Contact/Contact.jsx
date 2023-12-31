import React, { useRef } from 'react';
import './Contact.scss';
import { Navbar, Footer } from '../../components';
import phone from '../../assets/phone.svg';
import mail from '../../assets/email.svg';
import { motion } from 'framer-motion';
import data from '../../data';

import { app, database } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../background.css';

const Contact = () => {
  const collectionRef = collection(database, 'users');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const budgetRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const budget = budgetRef.current.value;
    const description = descriptionRef.current.value;

    if (!name || !email || !budget || !description) {
      toast.error('Enter all the field', {
        autoClose: 1000,
      });
    } else {
      addDoc(collectionRef, {
        name,
        email,
        budget,
        description,
      })
        .then(() => {
          toast.success('data added');
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      <Navbar />
      <div className="contents">
        <div className="content-left">
          <div className="text">
            <h1 className="gradient__text">Get in touch</h1>
            <p>
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get bak to you in the next 24 hours.
            </p>
          </div>
          <div className="text">
            <span>
              <img src={mail} alt="" />
              <a href="mailto:utkarshraj1306@gmail.com">{data.emailId}</a>
              <div></div>
            </span>
            <span>
              <img src={phone} alt="" />
              <p>{data.phoneNo}</p>
              <div></div>
            </span>
          </div>
        </div>
        <form className="content-right">
          <div className="input-items">
            <label>Your Name</label>
            <input ref={nameRef} placeholder={data.name} type="text" />
          </div>
          <div className="input-items">
            <label>Your Email</label>
            <input ref={emailRef} placeholder={data.emailId} type="email" />
          </div>
          <div className="input-items">
            <label>Your approximate budget (USD $)</label>
            <input
              ref={budgetRef}
              placeholder={data.approximateBudget}
              type="number"
            />
          </div>
          <div className="input-items">
            <label>Tell more what you are looking for?</label>
            <input
              ref={descriptionRef}
              placeholder="I want a website for my business "
              type="text"
            />
          </div>
          <button to="/" className="cta-btn" onClick={handleSubmit}>
            Contact Me
          </button>
        </form>
      </div>
      <Footer />
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
};

export default Contact;
