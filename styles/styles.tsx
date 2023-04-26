import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F2F2F2",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 40,
    width: "100%",
    overflow: "hidden"
  },
  headerLocation: {
    backgroundColor: "#D4F9F5",
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 80,
  },
  userImg: {
    width: 40,
    height: 40
  },
  searchImg: {
    width: 24,
    height: 24,
  },
  logoImg: {
    width: 118,
    height: 88,
  },
  handImg: {
    width: 118,
    height: 181,
    top: -16
  },
  ellipseImg: {
    width: 28,
    height: 6,
  },
  fontTitle: {
    color: "#219f90",
    fontFamily: "Roboto-light",
    fontSize: 18,
    paddingTop: 3
  },
  inputLocation: {
    backgroundColor: "#fff",
    borderRadius: 50,
    minHeight: 56,
    paddingLeft: 16,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    top: -16,
  }
})
