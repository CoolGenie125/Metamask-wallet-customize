import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    minWidth: "100%",
  },
  optionButton: {
    borderRadius: 15,
    width: 300,
    paddingTop: "20px",
    paddingBottom: "20px",
    marginBottom: "20px",
    background: "#efebeb",
    cursor: "pointer",
    "&:hover": {
      background: "#e7dada",
    },
    [theme.breakpoints.down(769)]: {
      width: "100%",
    },
  },
  activeOptionButton: {
    borderRadius: 12,
    width: 300,
    paddingTop: "20px",
    paddingBottom: "20px",
    marginBottom: "20px",
    background: "#e7dada",
  },
  btnTitle: {
    fontSize: 16,
    marginTop: "20px",
  },
  btnIcon: {
    width: "70px",
  },
}));
