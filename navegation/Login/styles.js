import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: height,
    flex: 1,
    alignItems: "center",
    marginTop: "10%",
  },
  login: {
    width: width - 66,
    height: height * 0.7,
    marginTop: "auto",
    marginBottom: 33,
  },
  title: {
    marginTop: 0,
    color: "#003595",
    fontSize: 24,
    fontWeight: "700",
  },
  subTitle: {
    marginTop: 25,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  inputContainer: {
    position: "relative",
    minHeight: 54,
    marginBottom: 20,
    backgroundColor: "white",
  },
  input: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingLeft: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#011E41",
    color: "#011E41",
    fontSize: 16,
    zIndex: 0,
  },
  icon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 15,
    left: 10,
    zIndex: 10,
  },
  iconPassword: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 15,
    right: 10,
  },
  link: {
    fontWeight: "700",
    color: "#002F87",
  },
  btn: {
    width: "100%",
    height: 64,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    marginBottom: 40,
  },
  btnText: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    color: "#011E41",
    fontSize: 10,
    fontWeight: "500",
    marginBottom: 20,
  },
});

export default styles
