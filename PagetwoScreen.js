

import React, { Component } from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button , Body, Footer, FooterTab, Card, CardItem, Right, Left, Thumbnail, Icon} from 'native-base';

const images = {
  background: require('./BG.png'),
  launch: require('./logo.png'),
  college: require('./picture1.jpg'),
  chairman: require('./chairman.jpg'),
  founder: require('./founder.jpg')

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
export default class PagetwoScreen extends React.Component {
  static navigationOptions = {
    title: 'About KIT',
  };
  render() {
      const { navigate } = this.props.navigation;
    return (

      <Container>
                  <ScrollView>
                   <Content>
                     <Card >

                          <CardItem cardBody>
                              <Image source={images.college}/>
                          </CardItem>
                          <CardItem content>
                              <Text style={{fontSize: 15}}>KIT-Kalaignarkarunanidhi Institute of Technology,
                                one of the best engineering college in Coimbatore, is located at a distance of 12 kilometers from
                                Coimbatore Railway Station and 8 kilometers from Coimbatore Civil Aerodrome.
                                 Set in a calm and congenial locale, the college stands nestled in a spacious campus
                                  set in a vast area of 5 lakhs sq.ft with five storied buildings housing classrooms,
                                   laboratories, library, faculty rooms, conference .</Text>
                          </CardItem>

                   </Card>
                   <Card>
                        <CardItem header>
                            <Text style={{fontWeight: 'bold'}}>Our Vision</Text>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    To shape the Institution into a globally renowned centre for education and research in engineering and technology. We aim to foster pragmatic, ingenious ideas that would help in the advancement of the individual and the society.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem header>
                            <Text style={{fontWeight: 'bold'}}>Our Mission</Text>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    To provide wisdom through educational and job oriented training specially targeting young minds pursuing engineering and technology programmes thereby making them intellectually bright, critically intense and creatively powerful.
                                </Text>
                            </Body>
                        </CardItem>
                   </Card>
                   <Card >

                        <CardItem cardBody>
                            <Image source={images.founder} style={{height: 350, width: 350 }}/>
                        </CardItem>
                        <CardItem content>
                          <View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Thiru. Pongalur N. Palanisamy
                            </Text>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}> Founder Chairman
                            </Text>
                              <Text style={{fontSize: 15}}>The Vijayalakshmi Palanisamy Charitable Trust established in 2006 was founded by the illustrious entrepreneur, philanthropist and revered social activist Thiru.Pongalur N. Palanisamy, Former Minister , Govt. of Tamilnadu. A Post graduate in M.A Political Science and he holds a Diploma in Cement Manufacturing Process. He is well experienced in the Scientific Mining Process of Excavating Iron Ores, Granite Quarrying and Wind mills. His excellence and experience have realized the vision that is KIT..</Text>
                          </View>
                        </CardItem>

                 </Card>
                 <Card >

                      <CardItem cardBody>
                          <Image source={images.chairman} style={{height: 350, width: 350 }}/>
                      </CardItem>
                      <CardItem content>
                        <View>
                          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Thiru. P. Pynthamil
                          </Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Chairman
                          </Text>
                            <Text style={{fontSize: 15}}>
                              Let me begin by extending my greetings to all the aspirants to this prestigious Institution. To establish a college of repute was a dream of mine for a long time as I am committed to the cause of education. KIT-Kalaignarkarunanidhi Institute of Technology is dedicated to the cause of excellence in education. We place the student community at the centre and strive to instill confidence in them to face challenges of the contemporary globalized world. We are equally committed to the implementation of innovative, placement-oriented academic programmes and courses giving them a truly professional experience.
Young friends, I am confident that the ambience of this Institution will fulfil your long cherished dream of acquiring excellence in the field of higher education by providing the best infrastructure and training to achieve your career goals and ambitions.
                            </Text>
                        </View>
                      </CardItem>

               </Card>
               <Card >
                  <CardItem content>
                      <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mrs.Indu Murugesan
                        </Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Vice Chairperson
                        </Text>
                          <Text style={{fontSize: 15}}>
                            Let me begin by extending my greetings to all the aspirants to this prestigious Institution. To establish a college of repute was a dream of mine for a long time as I am committed to the cause of education. KIT-Kalaignarkarunanidhi Institute of Technology is dedicated to the cause of excellence in education. We place the student community at the centre and strive to instill confidence in them to face challenges of the contemporary globalized world. We are equally committed to the implementation of innovative, placement-oriented academic programmes and courses giving them a truly professional experience.
Young friends, I am confident that the ambience of this Institution will fulfil your long cherished dream of acquiring excellence in the field of higher education by providing the best infrastructure and training to achieve your career goals and ambitions.
                          </Text>
                      </View>
                    </CardItem>

             </Card>
             <Card >


                  <CardItem content>
                    <View>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dr.A.Vidhya Gokul,M.B.B.S,D.G.O.
                      </Text>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Managing Trustee
                      </Text>
                        <Text style={{fontSize: 15}}>
                          Let me begin by extending my greetings to all the aspirants to this prestigious Institution. To establish a college of repute was a dream of mine for a long time as I am committed to the cause of education. KIT-Kalaignarkarunanidhi Institute of Technology is dedicated to the cause of excellence in education. We place the student community at the centre and strive to instill confidence in them to face challenges of the contemporary globalized world. We are equally committed to the implementation of innovative, placement-oriented academic programmes and courses giving them a truly professional experience.
Young friends, I am confident that the ambience of this Institution will fulfil your long cherished dream of acquiring excellence in the field of higher education by providing the best infrastructure and training to achieve your career goals and ambitions.
                        </Text>
                    </View>
                  </CardItem>

           </Card>


                   </Content>
                 </ScrollView>
                 <Footer style={{backgroundColor: '#f00'}} >
                     <FooterTab style={{backgroundColor: '#f00'}} >
                        <Button onPress={() => navigate('Pagetwo')} >
                          <Text style={{color: '#fff', fontWeight: 'bold'}} >Profile</Text>
                          </Button>
                          <Button onPress={() => navigate('Pagethree')}>
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
