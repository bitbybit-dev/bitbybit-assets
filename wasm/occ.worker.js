import initOpenCascade from '@bitbybit-dev/occt/bitbybit-dev-occt';
import {
  initializationComplete,
  onMessageInput,
} from '@bitbybit-dev/occt-worker';

initOpenCascade().then((occ) => {
  initializationComplete(occ, undefined);
});

addEventListener('message', ({ data }) => {
  onMessageInput(data, postMessage);
});
