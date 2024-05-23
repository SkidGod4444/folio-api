import { child, get, ref, set } from "firebase/database";
import { FBdb } from "../init/firebase";
import {
  BlogT,
  ChatT,
  ContentT,
  LabelT,
  MsgT,
  ProjectT,
  StackT,
  UserT,
} from "../types";

async function CreateUser({ id, name, email, pfp }: UserT) {
  set(ref(FBdb, "users/" + id), {
    uid: id,
    username: name,
    email: email,
    pfp: pfp,
  });
}

async function GetUser(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `users/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

async function DelUser(id: string) {
  try {
    await set(ref(FBdb, `users/${id}`), null);
    return "User deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
}

////////////////////////////////////////////////////////////////////

async function CreateBlog({ id, title, content, source, labels, thumbnail }: BlogT) {
  set(ref(FBdb, "blogs/" + id), {
    uid: id,
    title: title,
    content: content,
    source: source,
    labels: labels,
    thumbnail: thumbnail,
  });
}

async function GetBlog(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `blogs/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch blog: ${error.message}`);
  }
}

async function DelBlog(id: string) {
  try {
    await set(ref(FBdb, `blogs/${id}`), null);
    return "Blog deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete blog: ${error.message}`);
  }
}

async function UpdateBlog(id: string, data: BlogT) {
  try {
    await set(ref(FBdb, `blogs/${id}`), data);
    return "Blog updated successfully";
  } catch (error: any) {
    throw new Error(`Failed to update chat: ${error.message}`);
  }
}

////////////////////////////////////////////////////////////////

async function CreateProject({ id, name, stacks, labels }: ProjectT) {
  set(ref(FBdb, "projects/" + id), {
    uid: id,
    name: name,
    stacks: stacks,
    labels: labels,
  });
}

async function GetProject(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `projects/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch project: ${error.message}`);
  }
}

async function DelProject(id: string) {
  try {
    await set(ref(FBdb, `projects/${id}`), null);
    return "Project deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete project: ${error.message}`);
  }
}

async function UpdateProject(id: string, data: ProjectT) {
  try {
    await set(ref(FBdb, `projects/${id}`), data);
    return "Project updated successfully";
  } catch (error: any) {
    throw new Error(`Failed to update project: ${error.message}`);
  }
}

////////////////////////////////////////////////////////////////

async function CreateContent({ id, title, source, labels }: ContentT) {
  set(ref(FBdb, "contents/" + id), {
    uid: id,
    title: title,
    source: source,
    labels: labels,
  });
}

async function GetContent(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `contents/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch project: ${error.message}`);
  }
}

async function DelContent(id: string) {
  try {
    await set(ref(FBdb, `contents/${id}`), null);
    return "Content deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete Content: ${error.message}`);
  }
}

async function UpdateContent(id: string, data: ContentT) {
  try {
    await set(ref(FBdb, `contents/${id}`), data);
    return "Content updated successfully";
  } catch (error: any) {
    throw new Error(`Failed to update Content: ${error.message}`);
  }
}

////////////////////////////////////////////////////////////////////////////////

async function CreateMsg({ id, from, to, message, chatId }: MsgT) {
  set(ref(FBdb, "msgs/" + id), {
    uid: id,
    from: from,
    to: to,
    message: message,
    chatId: chatId,
  });
}

async function GetMsg(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `msgs/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch msg: ${error.message}`);
  }
}

async function DelMsg(id: string) {
  try {
    await set(ref(FBdb, `msgs/${id}`), null);
    return "Msg deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete msg: ${error.message}`);
  }
}

async function UpdateMsg(id: string, data: MsgT) {
  try {
    await set(ref(FBdb, `msgs/${id}`), data);
    return "Msg updated successfully";
  } catch (error: any) {
    throw new Error(`Failed to update chat: ${error.message}`);
  }
}

////////////////////////////////////////////////////////////////////////////////

async function CreateChat({ id, user1, user2, User1Msgs, User2Msgs }: ChatT) {
  set(ref(FBdb, "chats/" + id), {
    uid: id,
    user1: user1,
    user2: user2,
    User1Msgs: User1Msgs,
    User2Msgs: User2Msgs,
  });
}

async function GetChat(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `chats/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch chat: ${error.message}`);
  }
}

async function DelChat(id: string) {
  try {
    await set(ref(FBdb, `chats/${id}`), null);
    return "Chat deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete chat: ${error.message}`);
  }
}

async function UpdateChat(id: string, data: ChatT) {
  try {
    await set(ref(FBdb, `chats/${id}`), data);
    return "Chat updated successfully";
  } catch (error: any) {
    throw new Error(`Failed to update chat: ${error.message}`);
  }
}

//////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

async function CreateStack({ id, name }: StackT) {
  set(ref(FBdb, "stacks/" + id), {
    uid: id,
    name: name,
  });
}

async function GetStack(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `stacks/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch stack: ${error.message}`);
  }
}

async function DelStack(id: string) {
  try {
    await set(ref(FBdb, `stacks/${id}`), null);
    return "Stack deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete stack: ${error.message}`);
  }
}
//////////////////////////////////////////////////////////////////////////

async function CreateLabel({ id, name }: LabelT) {
  set(ref(FBdb, "labels/" + id), {
    uid: id,
    name: name,
  });
}

async function GetLabel(Id: string) {
  const dbRef = ref(FBdb);
  try {
    const snapshot = await get(child(dbRef, `labels/${Id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch label: ${error.message}`);
  }
}

async function DelLabel(id: string) {
  try {
    await set(ref(FBdb, `labels/${id}`), null);
    return "Label deleted successfully";
  } catch (error: any) {
    throw new Error(`Failed to delete label: ${error.message}`);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////

async function GetAllUsers() {
  const dbRef = ref(FBdb, "users");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}

async function GetAllBlogs() {
  const dbRef = ref(FBdb, "blogs");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch blogs: ${error.message}`);
  }
}

async function GetAllProjects() {
  const dbRef = ref(FBdb, "projects");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch projects: ${error.message}`);
  }
}

async function GetAllContents() {
  const dbRef = ref(FBdb, "contents");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch contents: ${error.message}`);
  }
}

async function GetAllMsgs() {
  const dbRef = ref(FBdb, "msgs");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch msgs: ${error.message}`);
  }
}

async function GetAllChats() {
  const dbRef = ref(FBdb, "chats");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch chats: ${error.message}`);
  }
}

async function GetAllStacks() {
  const dbRef = ref(FBdb, "stacks");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch stacks: ${error.message}`);
  }
}

async function GetAllLabels() {
  const dbRef = ref(FBdb, "labels");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return { error: "No data available" };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch labels: ${error.message}`);
  }
}

export {
  CreateUser,
  GetUser,
  DelUser,
  CreateBlog,
  GetBlog,
  DelBlog,
  UpdateBlog,
  CreateProject,
  GetProject,
  DelProject,
  UpdateProject,
  CreateContent,
  GetContent,
  DelContent,
  UpdateContent,
  CreateMsg,
  GetMsg,
  DelMsg,
  UpdateMsg,
  CreateChat,
  GetChat,
  DelChat,
  UpdateChat,
  CreateStack,
  GetStack,
  DelStack,
  CreateLabel,
  GetLabel,
  DelLabel,
  GetAllUsers,
  GetAllBlogs,
  GetAllProjects,
  GetAllContents,
  GetAllMsgs,
  GetAllChats,
  GetAllStacks,
  GetAllLabels,
};
