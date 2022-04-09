import React, { useEffect, useState } from "react";
import { useInfo, useUpdateInfo } from "../context/DataContext";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";

import { InputAdornment } from "@mui/material";

const Page1 = ({ func }) => {
  const useinfo = useInfo();
  const useupdateinfo = useUpdateInfo();

  const [name, setName] = useState(useinfo.name);
  const [cm, setCm] = useState(useinfo.cm === -1 ? "" : useinfo.cm);
  const [pn, setPn] = useState(useinfo.pn === -1 ? "" : useinfo.pn);

  useEffect(() => {
    func(true);
    if (cm.length === 10 && pn.length === 11 && name.length >= 5) {
      func(false);

      useupdateinfo({ name: name, cm: cm, pn: pn });
    }
  }, [cm, pn, name]);

  return (
    <div className="page1">
      <TextField
        required
        id="pn"
        error={pn.length !== 11 && pn.length > 0}
        helperText={
          pn.length !== 11 && pn.length > 0 && "شماره وارد شده معتبر نیست"
        }
        color={pn.length === 11 && "success"}
        label="شماره همراه"
        value={pn}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LocalPhoneTwoToneIcon />
            </InputAdornment>
          ),
        }}
        type="number"
        onChange={(e) => {
          e.target.value.length <= 11 && setPn(e.target.value);
        }}
      />

      <TextField
        required
        id="name"
        error={name.length < 5 && name.length !== 0}
        helperText={
          name.length < 5 && name.length !== 0 && "نام کامل خود را وارد تمایید."
        }
        color={name && "success"}
        label="نام و نام خانوادگی"
        value={name}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountCircleTwoToneIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        required
        id="cm"
        error={cm.length !== 10 && cm.length > 0}
        helperText={
          cm.length !== 10 && cm.length > 0 && "کد ملی وارد شده معتبر نیست"
        }
        color={cm.length === 10 && "success"}
        label="کد ملی"
        value={cm}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <ArticleTwoToneIcon />
            </InputAdornment>
          ),
        }}
        type="number"
        onChange={(e) => {
          e.target.value.length <= 10 && setCm(e.target.value);
        }}
      />
    </div>
  );
};

export default Page1;
