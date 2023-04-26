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
})
