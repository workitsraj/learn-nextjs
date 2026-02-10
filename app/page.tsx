'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface ApiResponse {
  success: boolean;
  data: User[];
  count: number;
  message: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [healthStatus, setHealthStatus] = useState<string>('Checking...');

  useEffect(() => {
    // Fetch health check status
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setHealthStatus(data.status === 'ok' ? '✓ Healthy' : '✗ Unhealthy');
      })
      .catch(() => {
        setHealthStatus('✗ Error');
      });

    // Fetch users data
    fetch('/api/data')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data: ApiResponse) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Next.js</span>
          </h1>
          <p className={styles.description}>
            Learning Next.js with App Router 🚀
          </p>
          <div className={styles.healthBadge}>
            Health Status: {healthStatus}
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.subtitle}>Team Members</h2>
          
          {loading && (
            <div className={styles.loading}>Loading users...</div>
          )}
          
          {error && (
            <div className={styles.error}>Error: {error}</div>
          )}
          
          {!loading && !error && (
            <div className={styles.grid}>
              {users.map(user => (
                <div key={user.id} className={styles.card}>
                  <h3>{user.name}</h3>
                  <p className={styles.role}>{user.role}</p>
                  <p className={styles.email}>{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className={styles.footer}>
          <p>Built with Next.js App Router | Hardcoded Backend Data</p>
        </footer>
      </main>
    </div>
  );
}
