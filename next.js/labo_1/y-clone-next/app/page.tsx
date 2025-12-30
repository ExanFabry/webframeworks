import { PostComponent } from "./post-component";

const fetchPosts = async() => {
    const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/y-clone/posts.json", { cache: "no-store" });
    const data: Posts[] = await response.json();
    return data;
}

const fetchProfiles = async() => {
    const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/y-clone/profiles.json", { cache: "no-store" });
    const data: Profiles[] = await response.json();
    return data;
}

export default async function Home() {
  const posts: Posts[] = await fetchPosts();
  const profiles: Profiles[] = await fetchProfiles();
  for(let i = 0; i < posts.length; i++){
    posts[i].CreatedBy = profiles.find(profile => profile.username === posts[i].username);
  }
  return <PostComponent item={posts} />;
}
export interface Posts {
    name:      string;
    username:  string;
    text:      string;
    createdOn: Date;
    CreatedBy: Profiles | undefined;
}

interface Profiles {
    username:  string;
    name:      string;
    bio:       string;
    avatarUrl: string;
    bannerUrl: string;
}