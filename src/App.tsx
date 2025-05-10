import {RouterProvider} from 'react-router-dom'
import router from '@/common/router.ts'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/ui/theme'
import {SnackbarProvider} from '@/ui/CommonSnackbar'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
                <RouterProvider router={router} />
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App
