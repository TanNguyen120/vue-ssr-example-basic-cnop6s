// the app that share between client and server
import { createSSRApp } from 'vue';

export function createApp() {
    return createSSRApp({
        data: () => ({ count: 5 }),
        template: `<div @click="count++">{{ count }}</div> <div @click="count--"> Subtract </div>`,
    });
}