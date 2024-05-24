export type UserT = {
    id: string;
    name: string;
    pfp: string;
    email: string;
    msgs?: string[];
};

export type BlogT = {
    id: string;
    title: string;
    content: string;
    thumbnail?: string;
    date?: string;
    archived?: boolean;
    reads?: number;
    source: string;
    labels: string[];
};

export type ProjectT = {
    id: string;
    title: string;
    desc: string;
    img?: string;
    date?: string;
    archived?: boolean;
    iconsList?: string;
    stacks: string[];
    labels: string[];
};

export type ContentT = {
    id: string;
    title: string;
    content?: string;
    thumbnail?: string;
    date?: string;
    archived?: boolean;
    source: "NA" | "YouTube" | "X" | "Instagram" | "LinkedIn";
    labels: string[];
};

export type BlogCategT = {
    id: string;
    name: string;
    archived?: boolean;
    blogs?: string[];
};

export type ProductCategT = {
    id: string;
    name: string;
    archived?: boolean;
    products?: string[];
};

export type GuestbookT = {
    id: string;
    name: string;
    message: string;
    date?: string;
};

export type MsgT = {
    id: string;
    from: string;
    to: string;
    message: string;
    chatId: string;
    date?: string;
};

export type ChatT = {
    id: string;
    user1: string;
    user2: string;
    User1Msgs: string[];
    User2Msgs: string[];
};

export type StackT = {
    id: string;
    name: string;
    archived?: boolean;
    products?: string[];
};

export type LabelT = {
    id: string;
    name: string;
    archived?: boolean;
    blogs?: string[];
    products?: string[];
    contents?: string[];
};

