import Sidebar from './components/Sidebar';
import styles from './styles/app.module.scss';

const App = () => {
  return (
    <div className={styles["main"]} >
      <Sidebar />
    </div>
  );
};

export default App;
