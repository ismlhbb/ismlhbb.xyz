import { footerData } from 'constants/data';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='ending-footer'>
        © {new Date().getFullYear()} By {footerData.profileName}
      </div>
    </div>
  );
};

export default Footer;
