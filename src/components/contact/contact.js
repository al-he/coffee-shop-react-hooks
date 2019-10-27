import React, { useState, useContext } from 'react';
import Banner from '../banner';
import Footer from '../footer';
import dark from '../../assets/images/beans_logo_dark.svg';
import InputMask from 'react-input-mask';
import { Redirect } from 'react-router-dom';
import { MessageContext } from '../../context/message/message-context';
import is from 'is-js';

const Contact = () => {
    const { loading, error, sendMessage, send } = useContext(MessageContext);
    const [name, setName] = useState({ value: '', error: false });
    const [eml, setEmail] = useState({ value: '', error: false });
    const [phone, setPhone] = useState({ value: '' });
    const [text, setText] = useState({ value: '', error: false });
    const valid = str => /\S+@\S+\.\S+/.test(str);
    const dis = name.error || eml.error || text.error ? true : false;
    const not =
        name.value.length && eml.value.length && text.value.length
            ? true
            : false;
    const spinner = loading
        ? 'spinner-border spinner-border-sm'
        : 'spinner-border spinner-border-sm d-none';
    const erClass = error ? 'error-send' : 'error-send d-none';

    const submitMessage = e => {
        e.preventDefault();
        sendMessage({
            name: name.value,
            email: eml.value,
            phone: phone.value,
            text: text.value,
        });
    };

    if (send) {
        return <Redirect to="/thank" />;
    }

    return (
        <>
            <Banner title={'Contact us'} bg={'contact-banner'} />
            <div className="container">
                <div className="contacts-header">
                    <h1>Tell us about your tastes</h1>
                    <img className="beanslogo" src={dark} alt="Beans logo" />
                </div>
                <div className="contacts-form__wrap">
                    <form className="contacts-form" onSubmit={submitMessage}>
                        <div className="contacts-form__item">
                            <label
                                htmlFor="name"
                                className={name.error ? 'fail-label' : ''}>
                                Name<span>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name.value}
                                onChange={e => {
                                    const val = e.target.value;
                                    const er =
                                        is.string(val) && name.value.length < 20
                                            ? false
                                            : true;
                                    setName(state => {
                                        return {
                                            ...state,
                                            value: val,
                                            error: er,
                                        };
                                    });
                                }}
                                className={name.error ? 'fail-input' : ''}
                                required
                            />
                        </div>
                        <div className="contacts-form__item">
                            <label
                                htmlFor="email"
                                className={eml.error ? 'fail-label' : ''}>
                                E-mail<span>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={eml.value}
                                onChange={e => {
                                    const val = e.target.value;
                                    const er = !valid(val.trim())
                                        ? true
                                        : false;
                                    setEmail(state => {
                                        return {
                                            ...state,
                                            value: val,
                                            error: er,
                                        };
                                    });
                                }}
                                className={eml.error ? 'fail-input' : ''}
                                required
                            />
                        </div>
                        <div className="contacts-form__item">
                            <label htmlFor="phone">Phone</label>
                            <InputMask
                                mask="+7(999)-999-999"
                                type="tel"
                                id="phone"
                                placeholder="+7(___) ___-____"
                                value={phone.value}
                                onChange={e => {
                                    const val = e.target.value;
                                    setPhone(state => {
                                        return { ...state, value: val };
                                    });
                                }}
                            />
                        </div>
                        <p>
                            Your message <span>*</span>
                        </p>
                        <textarea
                            id="mess"
                            cols="45"
                            rows="5"
                            placeholder="Tell us..."
                            value={text.value}
                            onChange={e => {
                                const val = e.target.value;
                                const er =
                                    is.string(val) && text.value.length < 150
                                        ? false
                                        : true;
                                setText(state => {
                                    return {
                                        ...state,
                                        value: val,
                                        error: er,
                                    };
                                });
                            }}
                            className={text.error ? 'fail-input' : ''}
                            required></textarea>
                        <button
                            type="submit"
                            disabled={dis || !not}
                            className={dis || !not ? 'not-allowed-cursor' : ''}>
                            Send us
                            <span
                                className={spinner}
                                role="status"
                                aria-hidden="true"></span>
                        </button>
                    </form>
                </div>
                <h3 className={erClass}>
                    Something goes wrong ( Please try again
                </h3>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
