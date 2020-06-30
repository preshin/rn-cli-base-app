const colors = {
  darkTheme: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  defaultTheme: {
    primary: "#fff200",
    secondary: "#000000",
  },
  blueTheme: {
    primary: "#1167b1",
    secondary: "#FFFFFF",
  },
  lightTheme: {
    primary: "#FFFFFF",
    secondary: "#000000",
  },
};

const appTheme = { colors: { ...colors.defaultTheme } };

const theme = {
  lightTheme: {
    colors: { ...colors.lightTheme },
    reactNativeElementsTheme: {
      Button: {
        titleStyle: {
          color: colors.lightTheme.secondary,
        },
      },
    },
    appTheme,
  },
  blueTheme: {
    colors: { ...colors.blueTheme },
    reactNativeElementsTheme: {
      Button: {
        titleStyle: {
          color: colors.blueTheme.secondary,
        },
      },
    },
    appTheme,
  },
  darkTheme: {
    colors: { ...colors.darkTheme },
    reactNativeElementsTheme: {
      Button: {
        titleStyle: {
          color: colors.darkTheme.secondary,
        },
      },
    },
    appTheme,
  },
  defaultTheme: {
    colors: {
      // primary: "#fff200", secondary: "#000000"
      ...colors.defaultTheme,
    },
    reactNativeElementsTheme: {
      Button: {
        titleStyle: {
          color: colors.defaultTheme.secondary,
        },
      },
      // Text: {
      //   style: {
      //     fontSize: 10,
      //     color: "red",
      //   },
      // },
    },
    appTheme,
  },
};
export default theme;
