import { FormEvent, useContext, useState } from 'react'

import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/Home.module.css'
import { withSSRGuest } from '../utils/withSSRGuest';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data);
  }


  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="email">E-mail</label>
        <input type="email" placeholder='Digite seu e-mail' value={email} onChange={e => setEmail(e.target.value)} />
      
      <label htmlFor="password">Senha</label>
        <input type="password" placeholder='Digite sua Senha' value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});