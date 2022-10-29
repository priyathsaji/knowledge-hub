import styled from '@emotion/styled'
import Box from '@mui/material/Box'



const DocContentContainer = styled(Box)((theme)=>{
    return {
        height:"100%"
    }
})
export default function DocContent(){
    return (
        <DocContentContainer >
        this is the doc content
        </DocContentContainer>
    )
}