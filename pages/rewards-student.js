import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/_App/Navbar';
import baseUrl from '../utils/baseUrl';
import { useToken } from '../utils/TokenContext';

const API_GET_REWARDS = `${baseUrl}rewards/geAllRewardsByUser`;

const RewardsStudent = () => {
  const { loggedIn, token, userID } = useToken();
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (loggedIn && userID) {
      fetchRewards();
    }
  }, [loggedIn, userID]);

  const fetchRewards = async () => {
    try {
      const response = await axios.post(API_GET_REWARDS, {
        userId: userID
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRewards(response.data.rewards);
    } catch (error) {
      console.error('Error al obtener recompensas:', error);
      setErrorMsg('No se pudieron obtener las recompensas.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('es-EC', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const totalEnviado = rewards.filter(r => r.status).reduce((acc, r) => acc + (r.amount || 0), 0);
  const totalPendiente = rewards.filter(r => !r.status).reduce((acc, r) => acc + (r.amount || 0), 0);
  const totalGeneral = rewards.reduce((acc, r) => acc + (r.amount || 0), 0);

  return (
    <React.Fragment>
      <Navbar />
      <div className="rewards-area" style={{ padding: '2rem' }}>
        <h2>Mis Recompensas</h2>

        {loading ? (
          <p>Cargando recompensas...</p>
        ) : errorMsg ? (
          <p>{errorMsg}</p>
        ) : rewards.length === 0 ? (
          <p>No has recibido recompensas todavía.</p>
        ) : (
          <>
            {/* Cabecera con tarjetas */}
            <div className="rewards-summary" style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                backgroundColor: '#e6f7e9',
                padding: '1rem 2rem',
                borderRadius: '8px',
                borderLeft: '6px solid #52c41a',
                flex: '1 1 300px'
              }}>
                <h4 style={{ margin: 0 }}>💼 Saldo Enviado</h4>
                <p style={{ fontSize: '1.5rem', margin: 0 }}>
                  ₳ {totalEnviado}
                </p>
              </div>

              <div style={{
                backgroundColor: '#fffbe6',
                padding: '1rem 2rem',
                borderRadius: '8px',
                borderLeft: '6px solid #faad14',
                flex: '1 1 300px'
              }}>
                <h4 style={{ margin: 0 }}>⏳ Pendiente por Enviar</h4>
                <p style={{ fontSize: '1.5rem', margin: 0 }}>
                  ₳ {totalPendiente}
                </p>
              </div>

              <div style={{
                backgroundColor: '#e6f4ff',
                padding: '1rem 2rem',
                borderRadius: '8px',
                borderLeft: '6px solid #1890ff',
                flex: '1 1 300px'
              }}>
                <h4 style={{ margin: 0 }}>📊 Total Recompensas</h4>
                <p style={{ fontSize: '1.5rem', margin: 0 }}>
                  ₳ {totalGeneral}
                </p>
              </div>
            </div>

            {/* Tabla de recompensas */}
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Curso</th>
                    <th>Módulo</th>
                    <th>Test</th>
                    <th>Recompensa</th>
                    <th>Monto (ADA)</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Tx Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {rewards.map((reward, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{reward.course?.name || 'Sin nombre'}</td>
                      <td>{reward.test?.module?.name || '—'}</td>
                      <td>{reward.test?.description || '—'}</td>
                      <td>{reward.token_quantity} tokens</td>
                      <td>{reward.amount ?? '—'}</td>
                      <td>{formatDate(reward.createdAt)}</td>
                      <td style={{ textAlign: 'center', fontSize: '1.4rem' }}>
                        {reward.status ? '✅' : '⏳'}
                      </td>
                      <td>
                        {reward.transaction?.txHash ? (
                          <a
                            href={`https://preprod.cardanoscan.io/transaction/${reward.transaction.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {reward.transaction.txHash.substring(0, 12)}...
                          </a>
                        ) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default RewardsStudent;
