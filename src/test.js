// import { Grid, Card, Text, Image } from "@nextui-org/react";
// export default function App() {
//   // const MockItem = ({ text }) => {
//   //   return (
//   //     <Card color="primary" css={{ h: "$24" }}>
//   //       <Text h6 size={15} color="white" css={{ mt: 0 }}>
//   //         {text}
//   //       </Text>
//   //     </Card>
//   //   );
//   // };
//   var request = new XMLHttpRequest();
//   request.open("GET", "/essence.bunrumz/ListOfGames.json", false);
//   request.send(null);
//   console.log(request.responseText);
//   var GameList = JSON.parse(request.responseText)
//   return (
//     <Grid.Container gap={0.1} justify="center">
//       {
//                     Object.entries(GameList).map(([Game], i) => (
//                         <Grid xs={2} key={i}>
//                             <Image
//                                 id={i}
//                                 width='178 / 50%'
//                                 height='96 / 50%'
//                                 src={GameList[Game]["CoverArt"]}
//                                 alt="Default Image"
//                                 objectFit="cover"
//                                 onMouseEnter={
//                                     () => {
//                                         document.getElementById(i).style.cursor = 'pointer';
//                                     }
//                                 }
//                                 onClick={() => {
//                                     // navigate(`/essence.bunrumz/Player?game=${Game}`)
//                                 }}
//                                 css={{
//                                     boxShadow: '$md',
//                                     position: 'relative',
//                                     overflow: 'hidden',
//                                     transition: 'all 0.4s ease',
//                                     '&:hover': {
//                                         transform: 'scale(1.05, 1.05)',
//                                         'transform-origin': 'left right',
//                                         zIndex: '1',
//                                         transition: 'all 0.4s ease'
//                                     }
//                                 }}
//                             />
//                         </Grid>
//                     ))
//                 }
//     </Grid.Container>
//   );
// }
