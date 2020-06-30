import React, {Fragment, Component, useEffect, useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Keyboard,
} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import ErrorMessage from '../../components/ErrorMessage';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/actions/loginAction';
import {ThemeContext} from 'react-native-elements';
import {updateTheme} from '../../store/actions/themeUpdateAction';
import DismissKeyboard from '../../components/DismissKeyboard';

const Login = (props) => {
  const {theme} = useContext(ThemeContext);
  // const theme = useSelector(({ theme: { theme } }) => theme);
  const dispatch = useDispatch();

  console.log(
    'theme',
    theme,
    'sec',
    theme.colors.secondary,
    'pri',
    theme.colors.primary,
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
    password: Yup.string()
      .label('Password')
      .required()
      .min(4, 'Password must have more than 4 characters '),
  });

  const goToSignup = () => props.navigation.navigate('Signup');
  const goToForgotPassword = () => props.navigation.navigate('ForgotPassword');

  const handleSubmit = (values) => {
    if (values.email.length > 0 && values.password.length > 0) {
      Keyboard.dismiss();
      return dispatch(login());
      // setTimeout(() => {
      //   props.navigation.navigate("Signup");
      // }, 3000);
    }
  };

  const checkValidity = (isValid, isSubmitting, values) => {
    if (_.isEmpty(values.email) || _.isEmpty(values.password)) {
      return true;
    }
    return !isValid || isSubmitting;
  };

  return (
    <DismissKeyboard>
      <SafeAreaView
        style={{
          ...styles.container,
          backgroundColor: theme.appTheme.colors.primary,
        }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>rn-cli-base-app</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/icon.jpg')}
            resizeMode="contain"
          />
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          // onSubmit={() => dispatch(login())}
          validationSchema={validationSchema}>
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting,
          }) => {
            return (
              <Fragment>
                <FormInput
                  name="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder="Enter email"
                  autoCapitalize="none"
                  iconName="ios-mail"
                  iconColor={theme.appTheme.colors.secondary}
                  onBlur={handleBlur('email')}
                  autoFocus
                />
                <ErrorMessage errorValue={touched.email && errors.email} />
                <FormInput
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder="Enter password"
                  secureTextEntry
                  iconName="ios-lock"
                  iconColor={theme.appTheme.colors.secondary}
                  onBlur={handleBlur('password')}
                />
                <ErrorMessage
                  errorValue={touched.password && errors.password}
                />
                <View style={styles.forgotPassword}>
                  <Button
                    title="Forgot Password?"
                    onPress={goToForgotPassword}
                    titleStyle={{
                      color: theme.colors.error,
                    }}
                    type="clear"
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <FormButton
                    buttonType="outline"
                    onPress={handleSubmit}
                    title="LOGIN"
                    buttonColor={theme.appTheme.colors.secondary}
                    disabled={checkValidity(isValid, isSubmitting, values)}
                    loading={isSubmitting}
                    loadingProps={{color: theme.appTheme.colors.secondary}}
                  />
                </View>
              </Fragment>
            );
          }}
        </Formik>
        <Button
          title="Don't have an account? Sign Up"
          onPress={goToSignup}
          titleStyle={{
            color: theme.appTheme.colors.secondary,
          }}
          type="clear"
        />
      </SafeAreaView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff200",
    // justifyContent: "center",
    // paddingHorizontal: 30,
  },
  buttonContainer: {
    margin: 25,
  },
  title: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 80,
    // fontFamily: "nunito-regular",
  },
  logoContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  forgotPassword: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    // marginTop: -20,
  },
  logo: {
    alignItems: 'center',
    flex: 1,
    // padding: 20,
    height: 80,
    // width: "80%",
    // marginVertical: 10,
    // marginBottom: 25,
  },
});

export default Login;
