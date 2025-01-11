import { Outlet } from 'react-router-dom';
import classes from './layout.module.css';

export default function Layout() {
  return (
    <main className={classes.main}>
      <Outlet />
    </main>
  );
}
