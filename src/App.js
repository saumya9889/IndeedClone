import { useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import SignIn from './pages/sign-in';
import Jobs from './pages/jobs';
import SalaryGuide from './pages/salary-guide';
import CompanyReview from './pages/comany-review';

function App() {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      <Header handleOpenModal={handleOpenModal} />
      <Search />
      {modal && <SignIn closeModal={handleCloseModal} />}
      <Jobs /> 
      <CompanyReview/>
      <SalaryGuide/> 
    </div>
  );
}

export default App;
