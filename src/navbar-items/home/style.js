import styled from "styled-components";
import bg from "../../assets/hotel1.jpg"
import facilitiesBg from '../../assets/hotel2.jpg'
import roomsBg from '../../assets/hotel3.jpg'
export const Container = styled.div`

display:flex ;
justify-content: space-around;
background-color: burlywood;
font-size: 18px;
padding: 20px;
`;
export const Bgwrapper=styled.div `
background-image: url(${bg});
background-image: ${(props)=> props.$facilities ? `url(${facilitiesBg})`:`url(${bg})`};
//background-image:url(${roomsBg});
height: 700px;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
h2{
    color:black;
    font-family:sans-serif;
    font-weight:300;
}
h4{
    color:black;
    font-family:sans-serif;
    font-weight:300;
    
}
`
export const Button = styled.button`
background-color:${(props)=> (props.$secondary? "green":"blue")};
padding: ${(props)=> (props.$secondary ? "10px 20px":"10px" )};
`

