import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import Header from './Header';
import Footer from './Footer';
import SessionManager from '../utils/sessionManager';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [sessionToken, setSessionToken] = useState(null);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const initializeSession = async () => {
      // Clear any existing session on app load to always get greeting
      SessionManager.clearSession();
      
      // Always fetch intro to get greeting messages

      // No valid session found, create new one
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const apiKey = import.meta.env.VITE_API_KEY;
      
      console.log('Environment check:', { 
        apiUrl, 
        apiKey: apiKey ? 'present' : 'missing',
        allEnvVars: import.meta.env
      });
      
      const headers = { 'Content-Type': 'application/json' };
      if (apiKey) {
        headers['X-API-Key'] = apiKey;
      }
      
      try {
        const res = await fetch(`${apiUrl}/flow_intro`, {
          method: 'POST',
          headers,
        });
        const data = await res.json();
        
        if (data.session_id && data.session_token) {
          // Store session securely
          const success = SessionManager.setSession(data.session_id, data.session_token);
          
          if (success) {
            setSessionId(data.session_id);
            setSessionToken(data.session_token);
          } else {
            console.error('Failed to store session securely');
          }
        }
        
        if (data.messages) {
          setMessages(data.messages);
        }
      } catch (err) {
        console.error('Session initialization failed:', err);
        setMessages([
          {
            text: 'Willkommen! Leider konnte die Begrüßung nicht geladen werden.',
            sender: 'error',
          },
        ]);
      }
    };

    initializeSession();
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `${apiUrl}/flow_step`;
      const body = JSON.stringify({ 
        session_id: sessionId, 
        session_token: sessionToken,  // NEW: Include token
        message: input 
      });

      const headers = { 'Content-Type': 'application/json' };
      if (apiKey) {
        headers['X-API-Key'] = apiKey;
      }

      // Debug logging removed for security

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      // Response logging removed for security

      // Handle session expiration
      if (response.status === 401) {
        console.log('Session expired, clearing session and starting new conversation');
        // Clear session from secure storage
        SessionManager.clearSession();
        setSessionId(null);
        setSessionToken(null);
        setMessages([{
          text: 'Deine Sitzung ist abgelaufen. Bitte starte eine neue Unterhaltung.',
          sender: 'system'
        }]);
        setLoading(false);
        // Restart conversation
        setTimeout(() => window.location.reload(), 2000);
        return;
      }

      const data = await response.json();

      // Refresh session timestamp on successful request
      SessionManager.refreshSession();

      if (!sessionId && data.session_id) {
        setSessionId(data.session_id);
      }

      const newMessages = data.messages || [];
      if (newMessages.length > 0) {
        let delay = 0;
        const readingSpeed = 100;

        newMessages.forEach((msg, index) => {
          const text = typeof msg === 'string' ? msg : (msg.text || msg.content || '');
          const delayMs = Math.max(text.length * (1000 / readingSpeed), 1000);

          setTimeout(() => {
            if (index > 0) setLoading(true);
          }, delay);

          setTimeout(() => {
            setLoading(false);
            setMessages((prev) => [...prev, { ...msg, text }]);
          }, delay + (index > 0 ? 1000 : 0));

          delay += delayMs + (index > 0 ? 1000 : 0);
        });
      }

      if (data.done) {
        // Clear session when conversation is complete
        SessionManager.clearSession();
        setSessionId(null);
        setSessionToken(null);
      }
    } catch (err) {
      console.error('Error fetching response:', err);
      // Clear invalid session on network/server errors
      SessionManager.clearSession();
      setSessionId(null);
      setSessionToken(null);
      setMessages((prev) => [
        ...prev,
        { text: 'Serverfehler. Bitte später erneut versuchen.', sender: 'error' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: 'Figtree, sans-serif',
        backgroundColor: '#F7E5C9',
        color: '#4B7893'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '36rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          margin: '0 auto',
          height: '100vh'
        }}
      >
        <Header />
        <div 
          style={{
            flex: '1 1 0%',
            overflowY: 'auto',
            padding: '80px 16px 120px',
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '8px'
          }}
        >
          <div ref={bottomRef} />
          {loading && <MessageBubble text="" sender="typing" />}
          {[...messages].reverse().map((msg, i) => (
            <MessageBubble key={i} text={msg.text} sender={msg.sender} />
          ))}
        </div>
        <Footer
          input={input}
          onInputChange={setInput}
          onKeyDown={handleKeyDown}
          onSend={sendMessage}
          inputRef={inputRef}
          autoGrow={true}
        />
      </div>
    </div>
  );
}

export default Chat;