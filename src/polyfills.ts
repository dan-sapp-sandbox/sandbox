import { Buffer } from "buffer";

// @ts-ignore
window.Buffer = Buffer;

// @ts-ignore
window.process = { env: {} };
