import { Button} from "@mui/material";
import { useEffect, useState } from "react";
import Ansbtn from "./Ansbtn";
import { useInfo, useUpdateInfo } from "../context/DataContext";

const Page2 = ({ func, stnmb }) => {
  const useinfo = useInfo();
  const useupdateinfo = useUpdateInfo();

  const [anumb, setAnumb] = useState(
    stnmb === 1
      ? useinfo.ans1
      : stnmb === 2
      ? useinfo.ans2
      : stnmb === 3 && useinfo.ans3
  );

  function selecting(e) {
    setAnumb(e);
  }

  useEffect(() => {
    console.log("object");
    func(true);
    console.log("here1");
    if (anumb !== -1) {
      switch (stnmb) {
        case 1:
          useupdateinfo({ans1:anumb});
          break;
        case 2:
          useupdateinfo({ans2:anumb});
          break;
        case 3:
          useupdateinfo({ans3:anumb});
          break;
  
        default:
          break;
      }
      func(false);
    }
  }, [anumb]);

  const txt = "جواب سوال";

  return (
    <>
      <div className="question">
        <div className="quest">
          <Button variant="outlined" fullWidth color="secondary" align="center">
            سوال
          </Button>
        </div>

        <Ansbtn numb={1} anumb={anumb} func={selecting} txt={txt} />
        <Ansbtn numb={2} anumb={anumb} func={selecting} txt={txt} />
        <Ansbtn numb={3} anumb={anumb} func={selecting} txt={txt} />
        <Ansbtn numb={4} anumb={anumb} func={selecting} txt={txt} />
      </div>
    </>
  );
};

export default Page2;
