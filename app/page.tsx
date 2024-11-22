'use client';
import { Page } from '@components/Page';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';

const Home = () => {
  return (
    <Page>
      <Typography variant='h1'>Home</Typography>
      <Stack>
        <Link href='/example'>Form example</Link>
      </Stack>
    </Page>
  );
};
export default Home;
