/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
/* eslint no-unused-vars: 0 */
import { 
  Col, 
  Card, 
  CardTitle, 
  Label, 
  FormGroup, 
  Button, 
  CustomInput, 
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


import { Formik, Form, Field } from 'formik';
import { NotificationManager } from '../../components/common/react-notifications';

import { loginUser, logoutUser } from '../../redux/actions';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import MobileLogo from '../../assets/logos/logo_mobile.png'

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};



const Login = ({ history, loading, error, loginUserAction , logoutUserAction}) => {

  const [loginBefore, setLoginBefore] = useState(true);
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '') {
        loginUserAction(values, history);
      }
    }
  };

  const initialValues = { email, password };

  return (
    <>
    <Col className={`h-100 login-area ${loginBefore && 'home-area'}`}>
      <Colxx xxs="12" md="12" className="mx-auto my-auto">
        <Card className="">
          <div className="wrap_mobile_login">
            <NavLink to="/" className="home-logo white">
              <div>                
                <img src={MobileLogo} alt="" />
              </div>
            </NavLink>

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom mt20">
                  <FormGroup className="form-group has-float-label">
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                      placeholder="password"
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <CustomInput
                    type="checkbox"
                    id="exCustomCheckbox"
                    label="Remember me"
                    className="chk-remember"
                  />
                  <a href='#' className='email_desc'>Incorrect Email or password</a>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <NavLink to="/user/forgot-password">
                      <IntlMessages id="user.forgot-password-question" />
                    </NavLink> */}
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state mt20 ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.login-button" />
                      </span>
                    </Button>
                  </div>
                  <div className='t-c pass_desc'>
                    <p>
                      Don’t have account?
                      <a href="#" className='font_c_org ml20'>Click here!</a>
                    </p>
                    <p>
                      <a href="#">Forgot Password?</a>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
            

          </div>
        </Card>
      </Colxx>
    </Col>
  </>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};


export default connect(mapStateToProps, {
  loginUserAction: loginUser,
  logoutUserAction: logoutUser,
})(Login);