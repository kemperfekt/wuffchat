import React, { useRef, useEffect } from 'react';

function Footer({ input, onInputChange, onKeyDown, onSend, inputRef }) {
  const textareaRef = useRef(null);

  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 160) + 'px';
    }
  };

  useEffect(() => {
    autoResize();
  }, [input]);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        backgroundColor: '#4B7893',
        color: '#F7E5C9',
        borderTop: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 16px',
        minHeight: '80px'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '36rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
          <textarea
            ref={(el) => {
              textareaRef.current = el;
              if (inputRef) inputRef.current = el;
            }}
            rows={1}
            inputMode="text"
            value={input}
            onChange={(e) => {
              onInputChange(e.target.value);
              autoResize();
            }}
            onKeyDown={onKeyDown}
            placeholder="Schreib' hier..."
            style={{
              flex: '1 1 0%',
              resize: 'none',
              overflow: 'auto',
              borderRadius: '6px',
              border: '1px solid #ccc',
              padding: '10px 12px',
              fontSize: '16px',
              backgroundColor: 'white',
              color: 'black',
              outline: 'none',
              maxHeight: '160px',
              fontFamily: 'Figtree, sans-serif',
              minHeight: '40px',
              lineHeight: '1.2'
            }}
          />
          <button
            type="button"
            onClick={onSend}
            style={{
              padding: '10px 16px',
              borderRadius: '6px',
              backgroundColor: '#B76B27',
              color: 'white',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Wuff
          </button>
        </div>
        <div 
          style={{
            fontSize: '12px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <a 
            href="/public/datenschutz.html" 
            style={{ 
              color: '#F7E5C9CC', 
              textDecoration: 'underline',
              transition: 'opacity 0.2s'
            }}
          >
            Datenschutz
          </a>
          <a 
            href="/public/impressum.html" 
            style={{ 
              color: '#F7E5C9CC', 
              textDecoration: 'underline',
              transition: 'opacity 0.2s'
            }}
          >
            Impressum
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
