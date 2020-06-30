import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Button, ThemeContext } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import ErrorMessage from "../../components/ErrorMessage";
import { useContext } from "react";
import DismissKeyboard from "../../components/DismissKeyboard";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(4, "Password must have more than 4 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
    .required("Confirm Password is required"),
});

export default function SignUp(props) {
  const { theme } = useContext(ThemeContext);

  const goToLogin = () => props.navigation.navigate("Login");

  const handleSubmit = (values) => {
    if (values.email.length > 0 && values.password.length > 0) {
      setTimeout(() => {
        props.navigation.navigate("App");
      }, 3000);
    }
  };

  const checkValidity = (isValid, isSubmitting, values) => {
    console.log("sign up val", values);
    // if (_.isEmpty(values.forgotPasswordEmail)) {
    //   return true;
    // }
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
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
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
          }) => (
            <Fragment>
              <FormInput
                name="name"
                value={values.name}
                onChangeText={handleChange("name")}
                placeholder="Enter your full name"
                iconName="md-person"
                iconColor={theme.appTheme.colors.secondary}
                onBlur={handleBlur("name")}
                autoFocus
              />
              <ErrorMessage errorValue={touched.name && errors.name} />
              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor={theme.appTheme.colors.secondary}
                onBlur={handleBlur("email")}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Enter password"
                secureTextEntry
                iconName="ios-lock"
                iconColor={theme.appTheme.colors.secondary}
                onBlur={handleBlur("password")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                name="password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                placeholder="Confirm password"
                secureTextEntry
                iconName="ios-lock"
                iconColor={theme.appTheme.colors.secondary}
                onBlur={handleBlur("confirmPassword")}
              />
              <ErrorMessage
                errorValue={touched.confirmPassword && errors.confirmPassword}
              />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="SIGNUP"
                  buttonColor={theme.appTheme.colors.secondary}
                  disabled={checkValidity(isValid, isSubmitting, values)}
                  loading={isSubmitting}
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <Button
          title="Have an account? Login"
          onPress={goToLogin}
          titleStyle={{
            color: theme.appTheme.colors.secondary,
          }}
          type="clear"
        />
      </SafeAreaView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 25,
  },
});
