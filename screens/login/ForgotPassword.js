import React, { Fragment, Component, useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/loginAction";
import { ThemeContext } from "react-native-elements";
import { updateTheme } from "../../store/actions/themeUpdateAction";
import DismissKeyboard from "../../components/DismissKeyboard";

const ForgotPassword = (props) => {
  const { theme } = useContext(ThemeContext);
  // const theme = useSelector(({ theme: { theme } }) => theme);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    forgotPasswordEmail: Yup.string()
      .label("Email")
      .email("Enter a valid email")
      .required("Please enter a registered email"),
  });

  const handleSubmit = (values) => {
    if (values.forgotPasswordEmail.length > 0) {
      //   return dispatch(login());
    }
  };

  const checkValidity = (isValid, isSubmitting, values) => {
    if (_.isEmpty(values.forgotPasswordEmail)) {
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
        }}
      >
        <Formik
          initialValues={{ forgotPasswordEmail: "" }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
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
                  name="forgotPasswordEmail"
                  value={values.forgotPasswordEmail}
                  onChangeText={handleChange("forgotPasswordEmail")}
                  placeholder="Enter email"
                  autoCapitalize="none"
                  iconName="ios-mail"
                  iconColor={theme.appTheme.colors.secondary}
                  onBlur={handleBlur("forgotPasswordEmail")}
                  autoFocus
                />
                <ErrorMessage
                  errorValue={
                    touched.forgotPasswordEmail && errors.forgotPasswordEmail
                  }
                />
                <View style={styles.buttonContainer}>
                  <Button
                    //   buttonType="outline"
                    onPress={handleSubmit}
                    title="Send Password Link"
                    titleStyle={{ color: theme.appTheme.colors.primary }}
                    buttonStyle={{
                      backgroundColor: theme.appTheme.colors.secondary,
                      borderRadius: 5,
                      // margin: 25,
                      width: 250,
                    }}
                    disabled={checkValidity(isValid, isSubmitting, values)}
                    loading={isSubmitting}
                    type="solid"
                  />
                </View>
              </Fragment>
            );
          }}
        </Formik>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 25,
    alignItems: "center",
  },
});

export default ForgotPassword;
