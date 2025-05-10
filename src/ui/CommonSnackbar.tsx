// src/components/CommonSnackbar.tsx
import {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from 'react'
import {Snackbar, Alert, AlertColor} from '@mui/material'

interface SnackbarContextType {
    openSnackbar: (
        message: string,
        severity?: AlertColor,
        duration?: number
    ) => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
    undefined
)

interface SnackbarProviderProps {
    children: ReactNode
}

export const SnackbarProvider = ({children}: SnackbarProviderProps) => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState<AlertColor>('info')
    const [autoHideDuration, setAutoHideDuration] = useState(3000)

    const openSnackbar = useCallback(
        (msg: string, sev: AlertColor = 'info', duration = 3000) => {
            setMessage(msg)
            setSeverity(sev)
            setAutoHideDuration(duration)
            setOpen(true)
        },
        []
    )

    return (
        <SnackbarContext.Provider value={{openSnackbar}}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={autoHideDuration}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            >
                <Alert severity={severity} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    )
}

export const useSnackbar = (): SnackbarContextType['openSnackbar'] => {
    const context = useContext(SnackbarContext)
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider')
    }
    return context.openSnackbar
}
