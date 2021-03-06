import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../SignUpOrgPage/SignUpOrg.module.scss";
import { ReactComponent as Image } from "../../../../assets/svg/Location.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUpLocation = () => {
  return (
    <div>
      <Typography variant="h5" className={styles.heading}>
        Hello, User
      </Typography>
      <div className={styles.content}>
        <Image className={styles.image} />
        <div className={styles.detail}>
          <Typography variant="h6">
            Tell us the location of your organization
          </Typography>
          <TextField variant="outlined" className={styles.textField} />
          <Button
            variant="contained"
            className={styles.button}
            disableElevation
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpLocation;
