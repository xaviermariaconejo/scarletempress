import { CSSProperties } from 'react';

const container: CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  color: '#333333',
  margin: '20px auto',
  maxWidth: '600px',
  paddingBottom: '20px',
  width: '90%',
};

const header: CSSProperties = {
  backgroundColor: '#ff2400',
  borderRadius: '8px 8px 0 0',
  color: '#ffffff',
  padding: '10px',
  textAlign: 'center',
};

const footer: CSSProperties = {
  color: '#ff6832',
  marginTop: '10px',
  padding: '10px',
  textAlign: 'center',
};

const content: CSSProperties = {
  padding: '20px',
};

const info: CSSProperties = {
  marginBottom: '10px',
};

const bold: CSSProperties = {
  fontWeight: 'bold',
};

export function ContactEmailTemplate({
  email,
  fullName,
  message,
}: {
  email: string;
  fullName: string;
  message: string;
}) {
  return (
    <div style={container}>
      <div style={header}>
        <h2>Contacto desde la Web</h2>
      </div>
      <div style={content}>
        <div style={info}>
          <span style={bold}>Nombre:</span> {fullName}
        </div>
        <div style={info}>
          <span style={bold}>Email:</span> {email}
        </div>
        <div style={info}>
          <p>
            <span style={bold}>Mensaje:</span>
          </p>
          <p>{message}</p>
        </div>
      </div>
      <div style={footer}>
        Mensaje enviado desde el formulario de contacto de la web
      </div>
    </div>
  );
}
