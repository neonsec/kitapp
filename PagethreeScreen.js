

import React, { Component } from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button , Body, Footer, FooterTab, Card, CardItem, Right, Left, Thumbnail, Icon} from 'native-base';

const images = {
  background: require('./BG.png'),
  launch: require('./logo.png'),
  college: require('./picture1.jpg'),
  chairman: require('./chairman.jpg'),
  founder: require('./founder.jpg'),
  library: require('./picture2.jpg'),
  audit: require('./picture3.jpg'),
  conf: require('./picture4.jpg'),
  host: require('./picture5.jpg'),
  court: require('./picture6.jpg'),
}
const styles = {
imageBg: {
  flex: 1,
  width: null,
  height: null,
}

}
// const cards = [
//     {
//         text: 'Card One',
//         name: 'One',
//         // image: require('./img/s
// ];
export default class PagethreeScreen extends React.Component {
  static navigationOptions = {
    title: 'Facilities',
  };
  render() {
      const { navigate } = this.props.navigation;
    return (

      <Container>
                  <ScrollView>
                   <Content>
                     <Card >

                       <CardItem header>
                           <Text style={{fontWeight: 'bold'}}>Library</Text>
                       </CardItem>
                          <CardItem cardBody>
                              <Image source={images.library} style={{height: 350, width: 350 }}/>
                          </CardItem>
                          <CardItem content>
                              <Text style={{fontSize: 15}}>The classy library of KIT stands as a treasure house of knowledge consisting of 7139 titles and more than 21,039 volumes subscribing to various national and international journals. With its spacious reading halls and modern infrastructure, the library provides the right ambience for reading and research for the learners.</Text>
                          </CardItem>

                   </Card>
                   <Card >

                     <CardItem header>
                         <Text style={{fontWeight: 'bold'}}>Auditorium</Text>
                     </CardItem>
                        <CardItem cardBody>
                            <Image source={images.audit} style={{height: 350, width: 350 }}/>
                        </CardItem>
                        <CardItem content>
                            <Text style={{fontSize: 15}}>The college has a world class infrastructure, spacious, state of the art, elegant and fully centralized auditorium with a seating capacity for 2500 delegates. The auditorium is facilitated with excellent acoustics and modern audiovisual facilities bringing functional sophistication to the events. The effective sound system lends a hand to grasp the valuable ideas of the speakers.</Text>
                        </CardItem>

                 </Card>
                 <Card >

                   <CardItem header>
                       <Text style={{fontWeight: 'bold'}}>Conference hall</Text>
                   </CardItem>
                      <CardItem cardBody>
                          <Image source={images.conf} style={{height: 350, width: 350 }}/>
                      </CardItem>
                      <CardItem content>
                          <Text style={{fontSize: 15}}>

KIT conference hall is well-equipped with a seating capacity of 300. The hallmark of this structure is its interior design and effective sound system ideal for a seminar and conference. This conference hall has all the facilities to enhance the learning process and is a vast space that serves the varied requirements of quality education.
.</Text>
                      </CardItem>

               </Card>
               {/*  */}
               <Card >

                 <CardItem header>
                     <Text style={{fontWeight: 'bold'}}>Hostel</Text>
                 </CardItem>
                    <CardItem cardBody>
                        <Image source={images.host} style={{height: 350, width: 350 }}/>
                    </CardItem>
                    <CardItem content>
                        <Text style={{fontSize: 15}}>

Separate and well- resourced hostels for boys and girls, with carpet area of 1,00,000 sq.ft. are available. Individual, double and triple rooms are offered to suit the needs of students. Air conditioned rooms are available for students pursuing the MBA programme. Unique facilities at the hostel include two common-rooms on each floor suitably furnished with LCD TV, extensive area for several indoor games and a well-equipped gym.
.</Text>
                    </CardItem>

             </Card>
             <Card >

               <CardItem header>
                   <Text style={{fontWeight: 'bold'}}>Foodcourt</Text>
               </CardItem>
                  <CardItem cardBody>
                      <Image source={images.court} style={{height: 350, width: 350 }}/>
                  </CardItem>
                  <CardItem content>
                      <Text style={{fontSize: 15}}>

The College has a spacious Food Court. It provides a variety of wholesome, tasty snacks and food at a reasonable price. The Canteen also provides packed snack items, bakery products and soft drinks for refreshment.
.</Text>
                  </CardItem>


           </Card>

                   </Content>
                 </ScrollView>
                 <Footer style={{backgroundColor: '#f00'}} >
                     <FooterTab style={{backgroundColor: '#f00'}} >
                        <Button onPress={() => navigate('Pagetwo')} >
                          <Text style={{color: '#fff', fontWeight: 'bold'}} >Profile</Text>
                          </Button>
                          <Button>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Facilities</Text>
                          </Button>
                          <Button >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Gallery</Text>
                          </Button>
                          <Button>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Contact</Text>
                          </Button>
                        </FooterTab>
                      </Footer>
               </Container>

    );
  }
}
