import styles from './index.css';
import withRouter from 'umi/withRouter';

const BasicLayout = (props) => {
  return (
    <div className={styles.normal}>
      { props.children }
    </div>
  );
}
export default withRouter(BasicLayout);
