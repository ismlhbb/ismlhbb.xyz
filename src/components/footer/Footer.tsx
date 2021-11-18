import CustomLink from 'components/links/CustomLink';
import { footerData } from 'constants/data';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='ending-footer'>
        © {new Date().getFullYear()} By{' '}
        <CustomLink className='footer-link' href={footerData.profileUrl}>
          {footerData.profileName}
        </CustomLink>
      </div>
    </div>
  );
};

export default Footer;
