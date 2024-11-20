import { styled, Box, Typography } from '@mui/material';
import Typewriter from '../MoveText/Typewriter';
import bloging from './bloging.jpg';

const Image = styled(Box)`
    width: 100%;
    background: url(${bloging}) center/85% repeat-x #000;
    opacity: 0.8;
    z-index:-1;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    font-weight: bold; /* Ensure the text is bold */
    background: #FFFFFF;
    z-index: 1;
`;

const Banner = () => {
    return (
        <Image>
            <SubHeading><Typewriter text="Welcome to Blog Website" delay={100} /></SubHeading>
        </Image>
    );
}

export default Banner;
