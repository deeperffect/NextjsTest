"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";

function CustomThemeProvider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
