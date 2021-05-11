import React from "react";
import styles from "./ErrorIndicator.module.css";
import icon from "./error.jpg";

export default function ErrorIndicator() {
  return (
    <div className={styles.container}>
      <div className={styles.errorIndicator}>
        <img className="img-fluid" src={icon} alt="error icon" />
        <div className="d-flex flex-column alert alert-warning" role="alert">
          <span className={styles.error}>Error!</span>
          <span>Something has gone terribly wrong!</span>
        </div>
      </div>
    </div>
  );
}
