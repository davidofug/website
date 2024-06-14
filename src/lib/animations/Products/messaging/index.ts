import Box from './box.svelte';
import Code from './code.svelte';
import Phone from './phone.svelte';

import { safeAnimate, sleep } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { getElSelector } from '../Products.svelte';

type Task = {
    id: string;
    title: string;
    checked: boolean;
};

type Message = {
    id: string;
    type: string;
    icon: string;
};

type State = {
    tasks: Task[];
    messages: Message[];
    tableSlice: number;
    submit: 'loading' | 'success';
};

const state = createResettable<State>({
    tasks: [
        {
            id: '3397fecdedb13397fecdedb1',
            title: 'Research user needs',
            checked: true
        }
    ],
    messages: [
        {
            id: '...3397fecdedb1',
            type: 'SMS',
            icon: './images/icons/illustrated/dark/push.png'
        },
        {
            id: '...2224gabjger4',
            type: 'Email',
            icon: './images/icons/illustrated/dark/email.png'
        }
    ],
    tableSlice: 2,
    submit: 'loading'
});

const execute = async () => {
    const phone = getElSelector('phone');
    const box = getElSelector('box');
    const code = getElSelector('code');
    const { update } = state.reset();

    await Promise.all([
        safeAnimate(phone, { x: 365, y: 0, width: '275px' }, { duration: 0.5 })?.finished,
        safeAnimate(box, { x: 50, y: 32, opacity: 1 }, { duration: 0.5 })?.finished,
        safeAnimate(code, { x: 80, y: 275, opacity: 1 }, { duration: 0.5 })?.finished
    ]);

    await sleep(250);

    update((p) => ({
        ...p,
        tasks: [
            ...p.tasks,
            {
                id: '3397fecdedb13397fecdedb2',
                title: 'Create wireframes',
                checked: false
            }
        ]
    }));
    await sleep(250);

    update((p) => ({
        ...p,
        tableSlice: p.tableSlice + 1
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        tasks: [
            ...p.tasks,
            {
                id: '3397fecdedb13397fecdedb3',
                title: 'Create visual design',
                checked: false
            }
        ]
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        tableSlice: p.tableSlice + 1
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        submit: 'success'
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        messages: [
            ...p.messages,
            {
                id: '...5689fdoerre2',
                type: 'Push',
                icon: './images/icons/illustrated/dark/push.png'
            }
        ]
    }));
};

export const messagingController = {
    execute,
    state
};

export const Messaging = {
    Phone,
    Box,
    Code
};
