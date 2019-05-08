import Reactotron from "reactotron-react-native";

//Reactotron.configure({ host: '192.168.1.14'}) quando estiver debbungando pelo dispositivo fisico

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  // criando uma variavel tron na variavel global console
  console.tron = tron;
  tron.clear(); // limpar histórico toda vez q a aplicação sobe novamente
}
