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
import { Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DialogContent from "@mui/material/DialogContent";

// import Claims from "home/Claims";
// const PurposeDetail = React.lazy(() => import("home/PurposeDetail"));

export default function Proposal({
  contactData,
  setContactData,
  setPlan,
  error,
  validate,
  insParty,
  setLoader,
}) {
  let [isEmailOtpActive, setEmailOtpActive] = useState(false);
  let [isMobileOtpActive, setMobileOtpActive] = useState(false);
  let [isAadharOtpActive, setAadharOtpActive] = useState(false);

  let [isEmailVarified, setEmailVerified] = useState(false);
  let [isMobileVarified, setMobileVerified] = useState(false);
  let [isAadharVerified, setAadharVerified] = useState(false);

  let [emailOtp, setEmailOtp] = useState("");
  let [mobileOtp, setMobileOtp] = useState("");
  let [aadharOtp, setAadharOtp] = useState("");

  const [payload, setPayload] = useState(null);

  const [final, setfinal] = useState(null);
  let [insPartyDetails, setInsPartyDetails] = useState({});

  useEffect(() => {
    if (emailOtp.length == 6) setEmailVerified(true);
  }, [emailOtp]);

  // useEffect(() => {
  //   const mojoauth = new MojoAuth("test-70d678ab-4b55-4445-9b2e-040ba352a6ce", {
  //     source: [{ type: "phone", feature: "otp" }],
  //   });
  //   mojoauth.signIn().then((payload) => {
  //     setPayload(payload);
  //     document.getElementById("mojoauth-passwordless-form").remove();
  //   });
  // }, []);

  useEffect(() => {
    if (final == "") {
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      auth
        .signInWithPhoneNumber("+91" + contactData["mobile"], verify)
        .then((result) => {
          setfinal(result);
          setMobileOtpActive(true);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [final]);

  useEffect(() => {
    if (mobileOtp.length == 6) {
      final
        .confirm(mobileOtp)
        .then((result) => {
          setMobileVerified(true);
        })
        .catch((err) => {
          alert("Wrong code");
        });
    }
  }, [mobileOtp]);
  useEffect(() => {
    if (aadharOtp.length == 6) setAadharVerified(true);
  }, [aadharOtp]);

  let navigate = useNavigate();
  async function next() {
    console.log(insPartyDetails);
    debugger;
    let insPartyArray = Object.entries(insPartyDetails).map((item) => {
      item[1]["relationship"] = item[0];
      return item[1];
    });
    console.log(data);

    let data = {
      customerId: sessionStorage.getItem("customerId"),
      quoteId: sessionStorage.getItem("quoteId"),
      mobile: "7338237890",
      firstName: insPartyDetails["Self"]?.firstName,
      lastName: insPartyDetails["Self"]?.lastName,
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
    navigate("../ekyc");
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
              </div>

              {final == "" && (
                <div
                  style={{ marginTop: "30px" }}
                  id="recaptcha-container"
                ></div>
              )}
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
