
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';


const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Bienvenido al Dashboard</h1>
        <div className="user-info">
          <span>Hola, {user?.name}</span>
          <button onClick={logout} className="logout-button">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="welcome-card">
          <h2>¡Hola {user?.name}!</h2>
          <p>Tu email verificado: {user?.email}</p>
          <p>Estado de verificación: {user?.isVerified ? 'Verificado' : 'No verificado'}</p>
          
          <div className="features">
            <h3>Próximas características:</h3>
            <ul>
              <li>Panel de control personalizado</li>
              <li>Configuración de perfil</li>
              <li>Gestión de preferencias</li>
              <li>Y mucho más...</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;