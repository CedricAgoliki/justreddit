import { createEffect, createSignal, onMount } from 'solid-js';
import './App.css';
import { Switch, Grid } from '@suid/material';
import { Shortcut } from '@suid/icons-material';
import { storage } from 'wxt/storage'
import { REDIRECT_TO_OLD } from '../settings';

function App() {
  const [redirectToOld, setRedirectToOld] = createSignal(false);

  const loadSettings = async () => {
    const redirectToOldValue = await storage.getItem<boolean>(REDIRECT_TO_OLD);
    setRedirectToOld(redirectToOldValue ?? false)
  }

  const setSetting = (setting: string, value: any) => {
    storage.setItem<boolean>(setting, value);
  }

  onMount(() => { loadSettings(); })

  return (
    <>
    <div>
      <Grid container  alignItems='center' spacing={3}>
        <Grid item><Shortcut /></Grid>
        <Grid item>Redirect to old.reddit</Grid>
        <Grid item><Switch checked={redirectToOld()} onChange={(_, value) => {
          setRedirectToOld(value);
          setSetting(REDIRECT_TO_OLD, value);
        }}/></Grid>
      </Grid>
    </div>
    </>
  );
}

export default App;
