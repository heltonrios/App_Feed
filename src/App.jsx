import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Helton Rios"
            content="lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor"
          />
          <Post
            author="Carolina Rios"
            content="lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor"
          />
        </main>
      </div>
    </div>
  );
}
