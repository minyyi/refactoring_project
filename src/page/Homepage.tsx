import Home from './Home';
import MyOffice from './agent/MyOffice';

const Homepage = () => {
  const role = localStorage.getItem('role');
  console.log(role);
  return role === 'customer' ? <Home /> : <MyOffice />;
};
export default Homepage;
