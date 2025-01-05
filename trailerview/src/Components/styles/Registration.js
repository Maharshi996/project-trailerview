import { InputBase, Stack, styled, Typography } from "@mui/material";
import { DesktopPxToVw } from "../../utils/convertfontsize";

export const LableText = styled(Typography)(() => ({
  fontSize: DesktopPxToVw(18),
}));

export const InputContainer = styled(Stack)(() => ({
  gap: DesktopPxToVw(10),
  fontFamily: "sans-serif",
  color: "rgba(255,253,258,0.7)",
}));

export const InputBox = styled(InputBase)(() => ({
  border: "1px solid  rgba(255,253,258,0.5)",
  padding: `${DesktopPxToVw(5)} ${DesktopPxToVw(15)} `,
  borderRadius: DesktopPxToVw(10),
  background: "rgba(0,0,0,0.2)",
  color: "rgba(255,253,258,0.7)",
  fontSize: DesktopPxToVw(22),
}));
