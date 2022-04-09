import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import CustomizedSteppers from "./components/Mystepper";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { useInfo, DataContext } from "./context/DataContext";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
  typography: { fontFamily: ["Noto Sans Arabic"].join(",") },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  const useinfo = useInfo();

  const [check, setcheck] = useState(true);
  const [st, setSt] = useState(0);
  function gonext() {
    setcheck(true);
    setSt(st + 1);
  }
  function goprev() {
    setcheck(true);
    setSt(st - 1);
  }

  return (
    <DataContext>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div className="pg" dir="rtl">
            <>
              <div className="page">
                <Typography
                  variant="h3"
                  component="h1"
                  align="center"
                  fontFamily={"Reem Kufi"}
                  fontWeight={400}
                  color="primary"
                >
                  ترنم آیات ۲
                </Typography>

                <Divider
                  sx={{
                    borderBottomWidth: 5,
                    background: "rgb(10,30,200)",
                    borderRadius: "50%",
                  }}
                />

                <CustomizedSteppers
                  state={
                    st === 0
                      ? 0
                      : st === 1 || st === 2 || st === 3
                      ? 1
                      : st === 4
                      ? 2
                      : st === 5 && 3
                  }
                />

                <Divider
                  sx={{
                    borderBottomWidth: 5,
                    color: "rgb(150,50,200)",
                    borderRadius: "50%",
                  }}
                >
                  {st === 0 ? (
                    "مشخصات"
                  ) : st === 1 ? (
                    <>
                      <CircleIcon color="primary" />
                      <CircleOutlinedIcon />
                      <CircleOutlinedIcon />
                    </>
                  ) : st === 2 ? (
                    <>
                      <CircleIcon color="primary" />
                      <CircleIcon color="primary" />
                      <CircleOutlinedIcon />
                    </>
                  ) : st === 3 ? (
                    <>
                      <CircleIcon color="primary" />
                      <CircleIcon color="primary" />
                      <CircleIcon color="primary" />
                    </>
                  ) : (
                    st === 4 && "ثبت پاسخ"
                  )}
                </Divider>

                <Box className="box">
                  {st === 0 && <Page1 func={setcheck} />}
                  {st === 1 && <Page2 func={setcheck} stnmb={1} />}
                  {st === 2 && <Page2 func={setcheck} stnmb={2} />}
                  {st === 3 && <Page2 func={setcheck} stnmb={3} />}
                  {st === 4 && <Page3 />}
                </Box>

                <Divider
                  sx={{
                    borderBottomWidth: 2,
                    background: "rgb(10,30,200)",
                    borderRadius: "50%",
                  }}
                />
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  {st >= 1 && st < 4 && (
                    <Button
                      variant={"contained"}
                      color="error"
                      startIcon={<ArrowCircleRightTwoToneIcon />}
                      onClick={goprev}
                      sx={{ width: "100%" }}
                    >
                      بازگشت
                    </Button>
                  )}
                  {st <= 3 && (
                    <Button
                      variant={check ? "outlined" : "contained"}
                      color={st === 3 ? "warning" : "success"}
                      disabled={check}
                      endIcon={st === 3 ? <CheckCircleTwoToneIcon /> : <ArrowCircleLeftTwoToneIcon />}
                      onClick={gonext}
                      sx={{ width: "100%" }}
                    >
                      {st === 3 ? "ثبت پاسخ" : "بعدی"}
                    </Button>
                  )}
                </Stack>
              </div>
            </>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </DataContext>
  );
}
