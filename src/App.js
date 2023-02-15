import { ChakraBaseProvider, extendBaseTheme, Text } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";
import Header from "./Component/Header/Header";
import Login from './Component/CardPages/Login'
const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});
// import { extendTheme } from '@chakra-ui/react'

// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

// // 3. Extend the theme
// const theme = extendTheme({ breakpoints })
function App() {
  return (
    <ChakraBaseProvider 
    theme={theme}
    >
      <Header />
      {/* <Login /> */}
    </ChakraBaseProvider>
  );
}

export default App;
