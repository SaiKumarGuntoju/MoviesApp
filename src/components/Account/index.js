import Header from '../Header'
import './index.css'

const Account = () => (
  <div className="page-container">
    <div className="account-page-container">
      <Header />
    </div>
    <div className="user-details-container">
      <h1>Account</h1>
      <hr className="line-break" />
      <div className="membership-container">
        <p style={{marginRight: '20px'}}>Member ship</p>
        <div>
          <p>saikumarguntoju@gmail.com</p>
          <p>Password : ***********</p>
        </div>
      </div>
      <hr className="line-break" />
      <div className="plan-details-container">
        <p style={{marginRight: '30px'}}>Plan details</p>
        <p>
          Premium <span>Ultra HD</span>
        </p>
      </div>
      <hr className="line-break" />
    </div>
  </div>
)

export default Account
