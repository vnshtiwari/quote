import { useState, useEffect } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import style from "./styles/basic-info.module.css";
import OtpInputBox from "./common/OtpInput";
import Divider from "@mui/material/Divider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { mobileCheck } from "../utility/common";
import { firebase, auth } from "../firebase";
import { Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DialogContent from "@mui/material/DialogContent";

export default function Proposal({
  contactData,
  setContactData,
  setPlan,
  error,
  validate,
  insParty,
  setLoader,
  basicData,
}) {
  let [insPartyDetails, setInsPartyDetails] = useState({});
  let [errorMsg, setErrorMsg] = useState(null);

  function validate() {
    let parties = Object.entries(insParty)
      .filter((elem) => elem[1])
      .map((e) => e[0]);

    for (let i = 0; i < parties.length; i++) {
      let check =
        insPartyDetails[parties[i]] &&
        insPartyDetails[parties[i]]["firstName"] &&
        insPartyDetails[parties[i]]["lastName"] &&
        insPartyDetails[parties[i]]["dob"] &&
        insPartyDetails[parties[i]]["weight"];

      if (!check) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    debugger;
    console.log(insPartyDetails);
    if (insParty["Self"]) {
      insPartyDetails["Self"] = {};
      insPartyDetails["Self"].firstName = basicData["firstName"];
      insPartyDetails["Self"].lastName = basicData["lastName"];
    }
  }, []);

  let navigate = useNavigate();
  async function next() {
    if (!validate()) {
      setErrorMsg(true);
      return;
    }
    let insPartyArray = Object.entries(insPartyDetails).map((item) => {
      item[1]["relationship"] = item[0];
      return item[1];
    });

    let data = {
      customerId: sessionStorage.getItem("customerId"),
      quoteId: sessionStorage.getItem("quoteId"),
      mobile: "7338237890",
      firstName: basicData["firstName"],
      lastName: basicData["lastName"],
      email: "apurva.test@example.com",
      dob: insPartyDetails["Self"]?.dob,
      gender: "male",
      insurableParty: insPartyArray,
    };

    setLoader(true);

    const rawResponse = await fetch(
      "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/proposal/create",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const content = await rawResponse.json();
    setLoader(false);

    console.log(content.proposalId);
    sessionStorage.setItem("proposalId", content.proposalId);
    navigate("../payment");
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">Do the Prudential Insurance</h3>

            <div>
              <div class="input-container  mt30 text">
                <Grid container spacing={2}>
                  {Object.entries(insParty)
                    .filter((elem) => {
                      return elem[1] == true;
                    })
                    .map((item) => {
                      return (
                        <Grid spacing={2} key={item} item container>
                          <Grid item xs={6} md={3}>
                            <TextField
                              id="filled-basic"
                              fullWidth
                              label="First Name"
                              variant="outlined"
                              value={insPartyDetails[item[0]]?.firstName}
                              onChange={(e) => {
                                if (!insPartyDetails[item[0]])
                                  insPartyDetails[item[0]] = {};
                                insPartyDetails[item[0]]["firstName"] =
                                  e.target.value;
                                setInsPartyDetails({ ...insPartyDetails });
                              }}
                            />
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <TextField
                              id="filled-basic"
                              fullWidth
                              label="Last Name"
                              variant="outlined"
                              value={insPartyDetails[item[0]]?.lastName}
                              onChange={(e) => {
                                if (!insPartyDetails[item[0]])
                                  insPartyDetails[item[0]] = {};
                                insPartyDetails[item[0]]["lastName"] =
                                  e.target.value;
                                setInsPartyDetails({ ...insPartyDetails });
                              }}
                            />
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <TextField
                              id="filled-basic"
                              fullWidth
                              label="Relationship"
                              disabled
                              variant="outlined"
                              value={item[0]}
                            />
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                className="fullwidth"
                                label="Date of Birth"
                                inputFormat="MM/dd/yyyy"
                                value={insPartyDetails[item[0]]?.["dob"]}
                                onChange={(newValue) => {
                                  if (!insPartyDetails[item[0]])
                                    insPartyDetails[item[0]] = {};
                                  insPartyDetails[item[0]]["dob"] = newValue;
                                  setInsPartyDetails({ ...insPartyDetails });
                                }}
                                inputProps={{
                                  autocomplete: "off",
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} fullWidth required />
                                )}
                              />
                            </LocalizationProvider>
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <TextField
                              id="filled-basic"
                              fullWidth
                              label="Weight"
                              variant="outlined"
                              value={insPartyDetails[item[0]]?.weight}
                              onChange={(e) => {
                                if (!insPartyDetails[item[0]])
                                  insPartyDetails[item[0]] = {};
                                insPartyDetails[item[0]]["weight"] =
                                  e.target.value.slice(0, 3);
                                setInsPartyDetails({ ...insPartyDetails });
                              }}
                              type="number"
                              required
                              inputProps={{
                                maxlength: 3,
                                autocomplete: "off",
                              }}
                            />
                          </Grid>
                        </Grid>
                      );
                    })}
                  {/* <Grid item xs={6} md={8}>
                    <TextField
                      id="filled-basic"
                      fullWidth
                      label="Pin code"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <TextField
                      id="filled-basic"
                      fullWidth
                      label="Pin code"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <TextField
                      id="filled-basic"
                      fullWidth
                      label="Pin code"
                      variant="outlined"
                    />{" "}
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <TextField
                      id="filled-basic"
                      fullWidth
                      label="Pin code"
                      variant="outlined"
                    />{" "}
                  </Grid> */}
                </Grid>
                <Typography
                  variant="caption"
                  sx={{ display: errorMsg ? "block" : "none", color: "red" }}
                  display="block"
                  gutterBottom
                >
                  All fields are manadatory.
                </Typography>
              </div>
            </div>
          </div>

          <div class="submit-wrap align-center">
            <Button
              variant="contained"
              onClick={next}
              color="error"
              endIcon={<SendIcon />}
            >
              Next
            </Button>
          </div>
        </div>
      </span>
    </section>
  );
}
