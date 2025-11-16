import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const AuthCallback = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        console.log('Processing authentication callback...');
        
        // MSAL'in redirect işlemini tamamlamasını bekle
        const response = await instance.handleRedirectPromise();
        
        if (response) {
          console.log('✅ Login successful:', response);
          navigate('/'); // Başarılıysa ana sayfaya yönlendir
        } else {
          console.log('No response from handleRedirectPromise');
          navigate('/'); // Yanlışlıkla bu sayfaya gelindiyse ana sayfaya yönlendir
        }
      } catch (error) {
        console.error('❌ Login failed:', error);
        navigate('/'); // Hata olsa bile ana sayfaya yönlendir
      }
    };

    handleRedirect();
  }, [instance, navigate]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>🔐 Processing Authentication...</h2>
      <p>Please wait while we complete your sign-in.</p>
    </div>
  );
};

export default AuthCallback;
