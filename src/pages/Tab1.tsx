import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

let isWdsTestKK = require('is-wds-test-kk')

const handleWds = async () => {
  console.log('handleWds()');
  console.log(isWdsTestKK.isWds('WDS'));
  console.log(isWdsTestKK.isWds('WDS1'));
}; 

const handleConnect = async () => {
  console.log('handleConnect()');
  isWdsTestKK.handleSocketConnect();
};

const handleSendMessage = async () => {
  console.log('handleSendMessage()');
  isWdsTestKK.handleSocketSend();
}

const handleClose = async () => {
  console.log('handleClose()');
  isWdsTestKK.handleSocketClose();
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={() => handleWds()}>WDS</IonButton>
        <IonButton onClick={() => handleConnect()}>Connect</IonButton>
        <IonButton onClick={() => handleSendMessage()}>Send Message</IonButton>
        <IonButton onClick={() => handleClose()}>Close</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
