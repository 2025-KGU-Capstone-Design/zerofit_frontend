// src/components/CommonSnackbar.tsx
import {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from 'react'
import {Snackbar, Alert, AlertColor, Slide, SlideProps} from '@mui/material'

interface SnackbarContextType {
    openSnackbar: (
        message: string,
        severity?: AlertColor,
        duration?: number
    ) => void
    closeSnackbar: () => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
    undefined
)

interface SnackbarProviderProps {
    children: ReactNode
}

const SlideUp = (props: SlideProps) => {
    return <Slide {...props} direction='up' />
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

    const handleClose = useCallback(
        (_event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') return
            setOpen(false)
        },
        []
    )

    const closeSnackbar = useCallback(() => {
        setOpen(false)
    }, [])

    return (
        <SnackbarContext.Provider value={{openSnackbar, closeSnackbar}}>
            {children}
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={autoHideDuration}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                TransitionComponent={SlideUp}
                transitionDuration={{enter: 400, exit: 300}}
            >
                <Alert
                    severity={severity}
                    onClose={handleClose}
                    sx={{
                        width: 'auto',
                        minWidth: 360,
                        px: 2.5,
                        py: 1.5,
                        fontSize: '1.1rem',
                    }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    )
}

export const useSnackbar = (): SnackbarContextType => {
    const context = useContext(SnackbarContext)
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider')
    }
    return context
}
