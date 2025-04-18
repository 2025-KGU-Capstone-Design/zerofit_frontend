// theme.ts
import {createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette: {
        background: {
            default: '#fafafa',
        },
        primary: {
            main: '#111827', // 페이지 메인 컬러(navy), light/dark 필요하면 추가하면 될 듯
        },
        secondary: {
            main: '#04D9D9', // sidebar 전환 및 로고 등에 사용되는 컬러(mint)
        },
    },
    typography: {
        fontFamily: '"Pretendard", sans-serif',
        allVariants: {
            lineHeight: 1.5,
            fontWeight: 400,
            color: '#000000',
        },
    },
})

export default theme
