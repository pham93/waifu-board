import { atomFamily, useRecoilCallback, useRecoilValue } from "recoil";
import * as atmosphere from "atmosphere.js";

export const socketsList = new Map<string, any>();

export const connectedState = atomFamily<any, string>({
  key: "connectedState",
  default: (_param) => false
});

const websocketEffect = (endpoint) => ({ setSelf, onSet, trigger }) => {
  const callbak = useRecoilCallback(({ snapshot, set }) => async (value) => {
    const d = await snapshot.getPromise(connectedState(endpoint));
    console.log(d);
    set(connectedState(endpoint), value);
  });

  const request: any = {
    url: `wss://l01up.sse.codesandbox.io/${endpoint}`,
    contentType: "application/json",
    transport: "websocket",
    fallbackTransport: "long-polling",
    onOpen() {
      console.log(endpoint, "opened");
    },
    onMessage(message: any) {
      console.log(endpoint, "on message", message.responseBody);
      callbak(true);
      setSelf(message.responseBody);
    }
  };
  const socket = atmosphere.subscribe(request);

  socketsList.set(endpoint, socket);

  onSet((newValue) => console.log("onSet", newValue));

  return () => socket.close();
};

export const sockets = atomFamily<any, string>({
  key: "sockets",
  default: null,
  effects_UNSTABLE: (_param) => [websocketEffect(_param)]
});

export const useWebsockets = () => {
  useRecoilValue(sockets("data"));
};
