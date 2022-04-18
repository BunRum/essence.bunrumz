
import { Button, Grid, Text, Card, Row, createTheme, NextUIProvider, Spacer, Col, Image, Tooltip } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
// import Carousel from 'flat-carousel';
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const darkTheme = createTheme({
    type: 'dark'
})


// const CustomCard = (e) => {
//     const navigate = useNavigate();
//     var Game = 'God of War'
//     var request = new XMLHttpRequest();
//     request.open("GET", "/essence.bunrumz/ListOfGames.json", false);
//     request.send(null)
//     console.log(request.responseText)
//     var GameList = JSON.parse(request.responseText)
//     const img = e.target.getAttribute("img");
//     return (
//         <img src={img}
//             style={{
//                 'display': 'block',
//                 'margin-left': 'auto',
//                 'margin-right': 'auto',
//                 'width': '90%'
//             }}
//         ></img>
//     )
// }

const ImgCarousel = [
    {
        title: 'fortnite',
        img: '/essence.bunrumz/images/fortnite.jpg'
    },
    {
        title: 'Yakuza kiwami',
        img: '/static/images/kiwami.jpg'
    },
    {
        title: 'yakuza 0',
        img: '/static/images/y0.jpg'
    },
    {
        title: 'Super Mario 64',
        img: '/images/sm64cover.jpg'
    },
    {
        title: 'Riddle School',
        img: '/images/rs1.jpg'
    },
    {
        title: 'Riddle School 2',
        img: '/images/rs2.png'
    },
    {
        title: 'Riddle School 3',
        img: '/images/rs3.jpg'
    },
    {
        title: 'Riddle School 4',
        img: '/images/rs4.jpg'
    },
    {
        title: 'Riddle School 5',
        img: '/images/rs5.jpg'
    },
    {
        title: 'Riddle Transfer',
        img: '/images/rst.jpg'
    },
    {
        title: 'Riddle Transfer 2',
        img: '/images/rt2.jpg'
    },
    {
        title: 'Spider-Man (2000)',
        img: '/images/sm2000.jpg'
    },
];

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export default function Games() {
    const navigate = useNavigate();
    var request = new XMLHttpRequest();
    request.open("GET", "/essence.bunrumz/ListOfGames.json", false);
    request.send(null)
    console.log(request.responseText)
    var GameList = JSON.parse(request.responseText)
    return (
        <div width="100%" height="100%">
            <Spacer y={1.5} />
            {/* <CustomCard></CustomCard> */}
            {/* <Carousel>
                {ImgCarousel.map((image, index) => (
                    <div
                        key={index}
                        className="demo-item"
                        style={{ backgroundImage: 'url(' + image.img + ')' }}
                    />
                ))}
            </Carousel> */}
            {/* <Slider {...settings}>
                {ImgCarousel.map((item, image) => (
                    <img src={item.img}
                    style={{
                        'display': 'block',
                        'margin-left': 'auto',
                        'margin-right': 'auto',
                        'width': '90%'
                    }}
                ></img>
                ))}
            </Slider> */}

            <Spacer y={1} />
            <Image
                id='rs'
                width={300}
                height={104}
                src='/essence.bunrumz/sitefiles/rss.png'
                alt="Default Image"
                objectFit="cover"
                onMouseEnter={
                    () => {
                        document.getElementById('rs').style.cursor = 'pointer';
                    }
                }
                onClick={() => {
                    navigate(`/essence.bunrumz/Riddle School Series`)
                }}
                css={{
                    boxShadow: '$md',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                        transform: 'scale(1.05, 1.05)',
                        'transform-origin': 'left right',
                        zIndex: '1',
                        transition: 'all 0.4s ease'
                    }
                }}
            />
            <Spacer y={3} />
            <Grid.Container gap={1} justify="center">
                {
                    Object.entries(GameList).map(([Game], i) => (
                        <Grid xs={1.3} key={i}>
                            <Image
                                id={i}
                                width='190'
                                height='104'
                                src={GameList[Game]["CoverArt"]}
                                alt="Default Image"
                                objectFit="cover"
                                onMouseEnter={
                                    () => {
                                        document.getElementById(i).style.cursor = 'pointer';
                                    }
                                }
                                onClick={() => {
                                    navigate(`/essence.bunrumz/Player?game=${Game}`)
                                }}
                                css={{
                                    boxShadow: '$md',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05, 1.05)',
                                        'transform-origin': 'left right',
                                        zIndex: '1',
                                        transition: 'all 0.4s ease'
                                    }
                                }}
                            />
                        </Grid>
                    ))
                }
            </Grid.Container >
        </div>
    );
}
