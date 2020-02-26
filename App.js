import * as React from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon,Button} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Registrar({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  const [postCorreo, setPostCorreo] = React.useState('');
  const [postPass, setPostPass] = React.useState('');

  return (
    
    <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Registro</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
            <Button>
            <Icon type= 'AntDesign' name= 'facebook-square'></Icon>
            <Text>Registrarse con facebook</Text>
          </Button>
          <Text></Text>
          <Button>
            <Icon type= 'AntDesign' name= 'twitter'></Icon>
            <Text>Registrarse con Twitter</Text>
          </Button>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario' value={postText} onChangeText={setPostText}/>
                </Item>
                <Item inlineLabel>
                <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo' value={postCorreo} onChangeText={setPostCorreo}/>
                </Item>
                 <Item inlineLabel>
                 <Icon type= 'MaterialCommunityIcons' name= 'textbox-password'></Icon>
                  <Input placeholder= 'Contraseña'value={postPass} onChangeText={setPostPass}/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style ={misEstilos.boton} onPress={() => navigation.navigate('Registrado', { post: postText , correo:postCorreo, pass:postPass})}><Text> Registrarse</Text></Button>
            </CardItem>        
          </Card>
        </Content>
      </Container>
  );
}


function Cambio({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  React.useEffect(() => {
    if (route.params?.correo) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.correo]);

  React.useEffect(() => {
    if (route.params?.pass) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.pass]);
  
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ margin: 10 }}>Nombre: {route.params?.post}</Text>
      <Text style={{ margin: 10 }}>Correo: {route.params?.correo}</Text>
      <Text style={{ margin: 10 }}>Password: {route.params?.pass}</Text>
    </View>
  );
}

function Apps({navigation}){
  return(

   
      <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style ={misEstilos.boton}><Text> Ingresar</Text></Button>
            </CardItem>
          </Card>
          <Card>
          <Button block success onPress={() => navigation.navigate('Registro')} >
            <Text>Registrarse</Text>
          </Button>
          </Card>
        </Content>      
      </Container>
      
  );
}



const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {  
        super(props);  
        this.state = {text: ''};  
    }    

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Apps} />
        <Stack.Screen name="Registro" component={Registrar} />
        <Stack.Screen name="Registrado" component={Cambio}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '35%',
  },
  body: {
    paddingVertical: 35,
  }
  
});

