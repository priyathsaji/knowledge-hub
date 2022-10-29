import styled from '@emotion/styled';
import Box from '@mui/material/Box';



const DocTreeContainer = styled(Box)((theme)=>{
    return {
        height:'100%',
    }
})

export default function DocsTree(){
    return (
        <DocTreeContainer>
            This is the doc tree component
        </DocTreeContainer>
    )
}