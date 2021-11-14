import FadeInSection from 'components/FadeInSection';
import CustomLink from 'components/links/CustomLink';

const Data = {
  profileName: 'Ismail Habibi Herman',
  profileUrl: 'https://ismlhbb.xyz',
};

const Footer = () => {
  return (
    <FadeInSection>
      <div id='footer'>
        <div className='ending-footer'>
          © {new Date().getFullYear()} By{' '}
          <CustomLink className='footer-link' href={Data.profileUrl}>
            {Data.profileName}
          </CustomLink>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Footer;
