import {createTheme, MantineProvider} from '@mantine/core';
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import './App.css';
import AppRoutes from '@/AppRoutes.jsx';


function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={{
      fontFamily: 'Roboto-Regular',
      headings: {
        fontFamily: 'Roboto-Regular',
        sizes: {
          h1: {
            fontSize: '2.5rem',
            lineHeight: 1.2,
            fontWeight: 700,
          }
        }
      }
    }
    }>
      <AppRoutes/>
    </MantineProvider>
  )
}

export default App
