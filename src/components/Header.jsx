import React from 'react';
import { Phone, Github } from 'lucide-react';
import logo from '../assets/logo_icon.png';

function Header() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        backgroundColor: '#4B7893',
        color: '#F7E5C9',
        padding: '8px 16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px'
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '36rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1, overflow: 'hidden' }}>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <span style={{ fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Wuffchat</span>
            <span style={{ fontSize: '14px', color: '#F7E5C9CC', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Der direkte Draht zu deinem Hund.</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="https://github.com/kemperfekt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github style={{ color: '#F7E5C9CC', transition: 'opacity 0.2s' }} size={22} />
          </a>
          <a href="tel:+491713022065" aria-label="Anrufen">
            <Phone style={{ color: '#F7E5C9CC', transition: 'opacity 0.2s' }} size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
